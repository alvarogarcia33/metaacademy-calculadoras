import { NextResponse } from "next/server";

import { createUser } from "@/lib/data-store";
import { hashPassword, setSessionCookie } from "@/lib/auth";
import { registerSchema } from "@/lib/validators/auth";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = registerSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Datos invalidos."
        },
        { status: 400 }
      );
    }

    const user = await createUser({
      ...parsed.data,
      passwordHash: hashPassword(parsed.data.password)
    });

    const response = NextResponse.json({
      ok: true,
      user
    });

    setSessionCookie(response, user.id);
    return response;
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_IN_USE") {
      return NextResponse.json(
        {
          error: "Ya existe una cuenta con ese email."
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: "No pudimos crear la cuenta."
      },
      { status: 500 }
    );
  }
}
