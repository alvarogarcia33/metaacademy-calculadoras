import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { DEFAULT_AVATAR_ID } from "@/lib/avatar-catalog";
import type { Database, SafeUser, StoredUser, UserProfile } from "@/lib/types";

const dataDirectory = path.join(process.cwd(), ".data");
const dataFile = path.join(dataDirectory, "metaacademy-db.json");

let mutationQueue: Promise<void> = Promise.resolve();

const emptyDatabase: Database = {
  users: []
};

function sanitizeUser(user: StoredUser): SafeUser {
  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    profile: user.profile
  };
}

async function ensureStorage() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(dataFile, "utf8");
  } catch {
    await writeFile(dataFile, JSON.stringify(emptyDatabase, null, 2), "utf8");
  }
}

async function readDatabase(): Promise<Database> {
  await ensureStorage();
  const content = await readFile(dataFile, "utf8");
  return JSON.parse(content) as Database;
}

async function commitDatabase(database: Database) {
  await writeFile(dataFile, JSON.stringify(database, null, 2), "utf8");
}

async function mutateDatabase<T>(mutator: (database: Database) => Promise<T> | T): Promise<T> {
  let result!: T;

  mutationQueue = mutationQueue.then(async () => {
    const database = await readDatabase();
    result = await mutator(database);
    await commitDatabase(database);
  });

  await mutationQueue;
  return result;
}

function createStarterProfile(displayName: string, goal: string): UserProfile {
  return {
    displayName,
    goal,
    avatarId: DEFAULT_AVATAR_ID,
    level: 1,
    xp: 120,
    streak: 1,
    spark: 85,
    metaCoins: 15
  };
}

export async function getUserByEmail(email: string) {
  const database = await readDatabase();
  return database.users.find((user) => user.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function getUserById(id: string) {
  const database = await readDatabase();
  const user = database.users.find((candidate) => candidate.id === id);
  return user ? sanitizeUser(user) : null;
}

export async function createUser(input: {
  email: string;
  passwordHash: string;
  displayName: string;
  goal: string;
}) {
  return mutateDatabase(async (database) => {
    const emailInUse = database.users.some(
      (user) => user.email.toLowerCase() === input.email.toLowerCase()
    );

    if (emailInUse) {
      throw new Error("EMAIL_IN_USE");
    }

    const user: StoredUser = {
      id: randomUUID(),
      email: input.email,
      passwordHash: input.passwordHash,
      createdAt: new Date().toISOString(),
      profile: createStarterProfile(input.displayName, input.goal)
    };

    database.users.push(user);
    return sanitizeUser(user);
  });
}

export async function updateUserProfile(
  userId: string,
  updates: Pick<UserProfile, "displayName" | "goal" | "avatarId">
) {
  return mutateDatabase(async (database) => {
    const user = database.users.find((candidate) => candidate.id === userId);

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    user.profile = {
      ...user.profile,
      ...updates
    };

    return sanitizeUser(user);
  });
}
