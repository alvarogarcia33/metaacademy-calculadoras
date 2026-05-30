import { NextResponse } from "next/server";

import { authenticateUser, setSessionCookie } from "@/lib/auth";
import { loginSchema } from "@/lib/validators/auth";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = loginSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Datos invalidos."
        },
        { status: 400 }
      );
    }

    const user = await authenticateUser(parsed.data.email, parsed.data.password);

    if (!user) {
      return NextResponse.json(
        {
          error: "Email o contrasena incorrectos."
        },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      ok: true,
      user
    });

    setSessionCookie(response, user.id);
    return response;
  } catch {
    return NextResponse.json(
      {
        error: "No pudimos iniciar sesion."
      },
      { status: 500 }
    );
  }
}
