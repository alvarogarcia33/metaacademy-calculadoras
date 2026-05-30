"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Award, Compass, Gem, LayoutDashboard, UserCircle2 } from "lucide-react";

import { MetaMascot } from "@/components/mascot/meta-mascot";
import { getAvatarById } from "@/lib/avatar-catalog";
import { SIDEBAR_ITEMS } from "@/lib/constants";
import type { SafeUser } from "@/lib/types";

import { LogoutButton } from "@/components/layout/logout-button";

const sidebarIcons = {
  "/dashboard": LayoutDashboard,
  "/profile": UserCircle2
};

const lockedItems = [
  { label: "Mapa", icon: Compass },
  { label: "Certificados", icon: Award },
  { label: "Tienda", icon: Gem }
];

export function AppShell({ children, user }: { children: React.ReactNode; user: SafeUser }) {
  const pathname = usePathname();
  const avatar = getAvatarById(user.profile.avatarId);
  const firstName = user.profile.displayName.split(" ")[0] ?? user.profile.displayName;

  return (
    <div className="shell">
      <aside className="sidebar">
        <Link className="brand" href="/dashboard">
          <span className="brandMark">M</span>
          <div>
            <p className="brandName">MetaAcademy</p>
            <p className="brandTag">Aprender. Progresar. Desbloquear.</p>
          </div>
        </Link>

        <div className="identityCard panel identityCardGame">
          <div className="identityTop">
            <div>
              <p className="eyebrow">Perfil activo</p>
              <p className="identityName">{user.profile.displayName}</p>
              <p className="muted">{avatar.title}</p>
            </div>
            <div
              className="identitySpark"
              style={{ background: avatar.accent, boxShadow: `0 0 28px ${avatar.glow}` }}
            />
          </div>
          <div className="identityMeta">
            <span>Nivel {user.profile.level}</span>
            <span>{user.profile.spark} Spark</span>
          </div>
          <div className="identityQuestLine">
            <span className="identityQuestPulse" />
            <span>{avatar.name} acompana tu progreso</span>
          </div>
        </div>

        <div className="companionCard panel">
          <MetaMascot
            badge="Avatar live"
            glow={avatar.glow}
            subtitle="Estoy aqui para celebrar cada racha, cada Spark y cada nueva zona que desbloquees."
            title={`Hola, ${firstName}.`}
            variant="card"
          />
        </div>

        <nav className="navPanel panel">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = sidebarIcons[item.href];
            const isActive = pathname === item.href;

            return (
              <Link
                className={`navLink ${isActive ? "navLinkActive" : ""}`}
                href={item.href}
                key={item.href}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="navDivider" />

          {lockedItems.map((item) => (
            <div className="navLink navLinkMuted" key={item.label}>
              <item.icon size={18} />
              <span>{item.label}</span>
              <small>Pronto</small>
            </div>
          ))}
        </nav>

        <LogoutButton />
      </aside>

      <main className="mainColumn">
        <header className="topbar panel topbarGame">
          <div>
            <p className="eyebrow">Fase 1 activa</p>
            <h1>Base funcional de MetaAcademy</h1>
          </div>
          <div className="topbarMeta">
            <span className="questPill">Companion activo</span>
            <div className="topbarStats">
              <span className="miniPill">XP {user.profile.xp}</span>
              <span className="miniPill">Racha {user.profile.streak} dias</span>
              <span className="miniPill">{user.profile.metaCoins} MetaCoins</span>
            </div>
          </div>
        </header>

        <div className="contentFrame">{children}</div>
      </main>
    </div>
  );
}
