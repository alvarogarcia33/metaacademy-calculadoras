import Link from "next/link";
import { ArrowUpRight, Flame, Gem, Sparkles, Star } from "lucide-react";

import { MetaMascot } from "@/components/mascot/meta-mascot";
import { getAvatarById } from "@/lib/avatar-catalog";
import { requireUser } from "@/lib/auth";
import { DASHBOARD_MISSIONS, WORLD_PREVIEWS } from "@/lib/constants";

export default async function DashboardPage() {
  const user = await requireUser();
  const avatar = getAvatarById(user.profile.avatarId);
  const activeMission = DASHBOARD_MISSIONS[(user.profile.level - 1) % DASHBOARD_MISSIONS.length];
  const nextLevelTarget = user.profile.level * 250;
  const progressPercent = Math.min(100, Math.round((user.profile.xp / nextLevelTarget) * 100));
  const onboardingChecks = [
    {
      label: "Cuenta creada",
      status: "Completado"
    },
    {
      label: "Perfil base listo",
      status: user.profile.displayName ? "Completado" : "Pendiente"
    },
    {
      label: "Avatar elegido",
      status: avatar.id ? "Completado" : "Pendiente"
    },
    {
      label: "Elegir primer mundo",
      status: "Siguiente paso"
    }
  ];

  return (
    <>
      <section className="pageGrid">
        <div className="panel missionCard">
          <p className="eyebrow">Bienvenido de vuelta</p>
          <h2 className="heroTitle" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", maxWidth: "12ch" }}>
            {user.profile.displayName}, tu progreso ya tiene forma.
          </h2>
          <p className="heroLead">
            Tu identidad activa es <strong>{avatar.name}</strong>. Mantienes una racha de{" "}
            <strong>{user.profile.streak} dias</strong> y el proximo salto de nivel esta al {progressPercent}%.
          </p>

          <div className="buttonRow">
            <Link className="button" href="/profile">
              Refinar perfil
            </Link>
            <Link className="button buttonSecondary" href="/profile">
              Elegir avatar
            </Link>
          </div>
        </div>

        <aside className="panel previewPanel">
          <div className="previewMascotShell">
            <MetaMascot glow={avatar.glow} variant="mini" />
          </div>
          <div>
            <p className="eyebrow">Mision del dia</p>
            <h3>{activeMission.title}</h3>
            <p className="muted">{activeMission.description}</p>
          </div>
          <div className="statusBadge">
            <Sparkles size={18} />
            <span>{activeMission.reward}</span>
          </div>
          <div>
            <p className="muted">Progreso hacia nivel {user.profile.level + 1}</p>
            <div className="progressBar">
              <div className="progressFill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </aside>
      </section>

      <section className="statsGrid">
        <article className="panel statCard">
          <Star size={18} />
          <span>Nivel actual</span>
          <strong>{user.profile.level}</strong>
        </article>
        <article className="panel statCard">
          <ArrowUpRight size={18} />
          <span>XP acumulada</span>
          <strong>{user.profile.xp}</strong>
        </article>
        <article className="panel statCard">
          <Flame size={18} />
          <span>Racha diaria</span>
          <strong>{user.profile.streak} dias</strong>
        </article>
        <article className="panel statCard">
          <Gem size={18} />
          <span>Economia inicial</span>
          <strong>
            {user.profile.spark} / {user.profile.metaCoins}
          </strong>
        </article>
      </section>

      <section className="pageGrid">
        <section className="panel profileMainPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Vista de producto</p>
              <h2>Los cuatro mundos ya tienen una base visible</h2>
            </div>
            <div className="statusBadge">
              <span>Fase 2 recomendada</span>
            </div>
          </div>

          <div className="worldGrid">
            {WORLD_PREVIEWS.map((world) => (
              <article className="worldCard panel" key={world.id}>
                <div className="worldHeader">
                  <h3>{world.title}</h3>
                  <span className="worldStatus">{world.status}</span>
                </div>
                <p>{world.description}</p>
                <p className="muted">
                  {world.routeCount} rutas · {world.nodeCount} nodos
                </p>
                <div className="worldAccent" style={{ background: world.accent }} />
              </article>
            ))}
          </div>
        </section>

        <aside className="panel previewPanel">
          <div>
            <p className="eyebrow">Checklist de onboarding</p>
            <h3>Tu primera victoria</h3>
          </div>

          <div className="checkList">
            {onboardingChecks.map((item) => (
              <div className="checkItem" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.status}</strong>
              </div>
            ))}
          </div>

          <Link className="button buttonSecondary" href="/profile">
            Ajustar perfil ahora
          </Link>
        </aside>
      </section>
    </>
  );
}
