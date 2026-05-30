import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { NextResponse } from "next/server";

import { getUserByEmail, getUserById } from "@/lib/data-store";

const SESSION_COOKIE_NAME = "metaacademy_session";
const SESSION_SECRET =
  process.env.SESSION_SECRET ?? "metaacademy-dev-secret-change-this-before-production";

function signValue(value: string) {
  return createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, existingHash] = storedHash.split(":");

  if (!salt || !existingHash) {
    return false;
  }

  const candidateHash = scryptSync(password, salt, 64);
  const expectedHash = Buffer.from(existingHash, "hex");

  if (candidateHash.length !== expectedHash.length) {
    return false;
  }

  return timingSafeEqual(candidateHash, expectedHash);
}

export function createSessionToken(userId: string) {
  return `${userId}.${signValue(userId)}`;
}

export function verifySessionToken(token: string) {
  const [userId, signature] = token.split(".");

  if (!userId || !signature) {
    return null;
  }

  const expectedSignature = signValue(userId);

  if (expectedSignature.length !== signature.length) {
    return null;
  }

  const isValid = timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
  return isValid ? userId : null;
}

export function setSessionCookie(response: NextResponse, userId: string) {
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: createSessionToken(userId),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
}

export async function authenticateUser(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user || !verifyPassword(password, user.passwordHash)) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    profile: user.profile
  };
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  const userId = verifySessionToken(token);
  if (!userId) {
    return null;
  }

  return getUserById(userId);
}

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}
