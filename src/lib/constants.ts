import type { WorldPreview } from "@/lib/types";

export const USER_GOALS = [
  "Entender el nuevo mundo digital",
  "Dominar cripto y blockchain",
  "Explorar Web3 y activos digitales",
  "Mejorar liderazgo y crecimiento personal"
] as const;

export const WORLD_PREVIEWS: WorldPreview[] = [
  {
    id: "digital-world",
    title: "Nuevo Mundo Digital",
    description: "Fundamentos claros para moverte con confianza en la economia digital.",
    routeCount: 5,
    nodeCount: 28,
    accent: "linear-gradient(135deg, #14b8a6, #0f766e)",
    status: "Activo"
  },
  {
    id: "crypto-blockchain",
    title: "Cripto y Blockchain",
    description: "Aprende como funciona el ecosistema cripto sin perderte en tecnicismos.",
    routeCount: 6,
    nodeCount: 34,
    accent: "linear-gradient(135deg, #f97316, #c2410c)",
    status: "Activo"
  },
  {
    id: "web3-assets",
    title: "Web3 y Activos Digitales",
    description: "NFTs, wallets, tokenizacion y propiedad digital explicados con ejemplos.",
    routeCount: 5,
    nodeCount: 31,
    accent: "linear-gradient(135deg, #f59e0b, #b45309)",
    status: "Proximo"
  },
  {
    id: "leadership-growth",
    title: "Liderazgo y Crecimiento",
    description: "Mentalidad, enfoque y habitos para sostener el avance a largo plazo.",
    routeCount: 4,
    nodeCount: 24,
    accent: "linear-gradient(135deg, #0ea5e9, #0369a1)",
    status: "Proximo"
  }
];

export const DASHBOARD_MISSIONS = [
  {
    id: "mission-1",
    title: "Completa tu identidad digital",
    reward: "+25 XP y +10 Spark",
    description: "Ajusta tu perfil, elige avatar y deja lista tu base para empezar a progresar."
  },
  {
    id: "mission-2",
    title: "Activa tu primera racha",
    reward: "+1 escudo de racha",
    description: "Vuelve manana y mantendras vivo tu impulso inicial."
  },
  {
    id: "mission-3",
    title: "Explora tu primer mundo",
    reward: "+40 XP y 1 llave",
    description: "Revisa los cuatro mundos y decide donde quieres avanzar primero."
  }
] as const;

export const SIDEBAR_ITEMS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Perfil" }
] as const;
