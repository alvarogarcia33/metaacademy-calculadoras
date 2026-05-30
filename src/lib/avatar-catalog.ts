export const AVATAR_CATALOG = [
  {
    id: "nova",
    name: "Nova",
    sigil: "N",
    title: "Explorador estrategico",
    accent: "linear-gradient(135deg, #14b8a6, #0f766e)",
    glow: "rgba(20, 184, 166, 0.35)"
  },
  {
    id: "pulse",
    name: "Pulse",
    sigil: "P",
    title: "Constructor de impulso",
    accent: "linear-gradient(135deg, #f97316, #c2410c)",
    glow: "rgba(249, 115, 22, 0.35)"
  },
  {
    id: "ember",
    name: "Ember",
    sigil: "E",
    title: "Lider de energia alta",
    accent: "linear-gradient(135deg, #f59e0b, #b45309)",
    glow: "rgba(245, 158, 11, 0.35)"
  },
  {
    id: "drift",
    name: "Drift",
    sigil: "D",
    title: "Analista paciente",
    accent: "linear-gradient(135deg, #0ea5e9, #0369a1)",
    glow: "rgba(14, 165, 233, 0.35)"
  },
  {
    id: "flux",
    name: "Flux",
    sigil: "F",
    title: "Visionario adaptable",
    accent: "linear-gradient(135deg, #22c55e, #15803d)",
    glow: "rgba(34, 197, 94, 0.35)"
  },
  {
    id: "echo",
    name: "Echo",
    sigil: "E",
    title: "Comunicador magnetico",
    accent: "linear-gradient(135deg, #fb7185, #be123c)",
    glow: "rgba(251, 113, 133, 0.35)"
  }
] as const;

export const DEFAULT_AVATAR_ID = AVATAR_CATALOG[0].id;

export const AVATAR_IDS = AVATAR_CATALOG.map((avatar) => avatar.id);

export function getAvatarById(avatarId: string) {
  return AVATAR_CATALOG.find((avatar) => avatar.id === avatarId) ?? AVATAR_CATALOG[0];
}
