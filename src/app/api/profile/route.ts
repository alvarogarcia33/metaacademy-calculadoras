import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { updateUserProfile } from "@/lib/data-store";
import { profileSchema } from "@/lib/validators/profile";

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json(
      {
        error: "Necesitas iniciar sesion."
      },
      { status: 401 }
    );
  }

  try {
    const payload = await request.json();
    const parsed = profileSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Datos invalidos."
        },
        { status: 400 }
      );
    }

    const user = await updateUserProfile(currentUser.id, parsed.data);
    return NextResponse.json({
      ok: true,
      user
    });
  } catch {
    return NextResponse.json(
      {
        error: "No pudimos actualizar el perfil."
      },
      { status: 500 }
    );
  }
}
