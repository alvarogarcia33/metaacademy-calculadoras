export interface UserProfile {
  displayName: string;
  goal: string;
  avatarId: string;
  level: number;
  xp: number;
  streak: number;
  spark: number;
  metaCoins: number;
}

export interface StoredUser {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  profile: UserProfile;
}

export interface SafeUser {
  id: string;
  email: string;
  createdAt: string;
  profile: UserProfile;
}

export interface Database {
  users: StoredUser[];
}

export interface WorldPreview {
  id: string;
  title: string;
  description: string;
  routeCount: number;
  nodeCount: number;
  accent: string;
  status: "Activo" | "Proximo";
}
