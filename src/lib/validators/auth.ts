import { z } from "zod";

import { USER_GOALS } from "@/lib/constants";

export const registerSchema = z.object({
  displayName: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres.").max(32),
  goal: z.enum(USER_GOALS, {
    error: "Selecciona uno de los objetivos disponibles."
  }),
  email: z.string().trim().email("Ingresa un email valido."),
  password: z.string().min(8, "La contrasena debe tener al menos 8 caracteres.")
});

export const loginSchema = z.object({
  email: z.string().trim().email("Ingresa un email valido."),
  password: z.string().min(8, "La contrasena debe tener al menos 8 caracteres.")
});
