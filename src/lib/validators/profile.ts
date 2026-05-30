import { z } from "zod";

import { AVATAR_IDS } from "@/lib/avatar-catalog";
import { USER_GOALS } from "@/lib/constants";

export const profileSchema = z.object({
  displayName: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres.").max(32),
  goal: z.enum(USER_GOALS, {
    error: "Selecciona uno de los objetivos disponibles."
  }),
  avatarId: z
    .string()
    .trim()
    .refine(
      (avatarId) => AVATAR_IDS.includes(avatarId as (typeof AVATAR_IDS)[number]),
      "Elige un avatar valido."
    )
});
