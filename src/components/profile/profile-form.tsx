"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

import { MetaMascot } from "@/components/mascot/meta-mascot";
import { AVATAR_CATALOG } from "@/lib/avatar-catalog";
import { USER_GOALS } from "@/lib/constants";
import type { SafeUser } from "@/lib/types";

export function ProfileForm({ user }: { user: SafeUser }) {
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState(user.profile.avatarId);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const activeAvatar = AVATAR_CATALOG.find((avatar) => avatar.id === selectedAvatar) ?? AVATAR_CATALOG[0];

  const handleSubmit = async (formData: FormData) => {
    setError("");
    setSuccess("");

    const payload = {
      displayName: formData.get("displayName"),
      goal: formData.get("goal"),
      avatarId: selectedAvatar
    };

    startTransition(async () => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "No pudimos actualizar tu perfil.");
        return;
      }

      setSuccess("Perfil actualizado. Tu identidad digital ya esta lista.");
      router.refresh();
    });
  };

  return (
    <div className="pageGrid">
      <section className="panel profileMainPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Perfil y avatar base</p>
            <h2>Define la presencia con la que vas a avanzar</h2>
          </div>
          <div className="statusBadge">
            <CheckCircle2 size={18} />
            <span>Fase 1 completando identidad</span>
          </div>
        </div>

        <form action={handleSubmit} className="formStack">
          <div className="formSplit">
            <label className="fieldStack">
              <span>Nombre visible</span>
              <input className="textInput" defaultValue={user.profile.displayName} name="displayName" required />
            </label>

            <label className="fieldStack">
              <span>Objetivo principal</span>
              <select className="textInput" defaultValue={user.profile.goal} name="goal" required>
                {USER_GOALS.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="fieldStack">
            <span>Seleccion de avatar</span>
            <div className="avatarGrid">
              {AVATAR_CATALOG.map((avatar) => {
                const isSelected = avatar.id === selectedAvatar;

                return (
                  <button
                    className={`avatarCard ${isSelected ? "avatarCardSelected" : ""}`}
                    key={avatar.id}
                    onClick={() => setSelectedAvatar(avatar.id)}
                    style={{ "--avatarGlow": avatar.glow } as React.CSSProperties}
                    type="button"
                  >
                    <div className="avatarBadge largeAvatar" style={{ background: avatar.accent }}>
                      <span>{avatar.sigil}</span>
                    </div>
                    <div>
                      <strong>{avatar.name}</strong>
                      <p>{avatar.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {error ? <p className="errorText">{error}</p> : null}
          {success ? <p className="successText">{success}</p> : null}

          <div className="buttonRow">
            <button className="button" disabled={isPending} type="submit">
              {isPending ? "Guardando..." : "Guardar perfil"}
            </button>
            <Link className="button buttonSecondary" href="/dashboard">
              Ir al dashboard
            </Link>
          </div>
        </form>
      </section>

      <aside className="panel previewPanel">
        <div className="previewMascotShell">
          <MetaMascot
            badge="Avatar activo"
            glow={activeAvatar.glow}
            subtitle={`${activeAvatar.name}: ${activeAvatar.title}.`}
            title={user.profile.displayName}
            variant="card"
          />
        </div>

        <p className="previewCaption">
          Tu companion actual es <strong>{activeAvatar.name}</strong>.
        </p>

        <div className="previewMeta">
          <div>
            <small>Nivel</small>
            <strong>{user.profile.level}</strong>
          </div>
          <div>
            <small>XP actual</small>
            <strong>{user.profile.xp}</strong>
          </div>
          <div>
            <small>Objetivo</small>
            <strong>{user.profile.goal}</strong>
          </div>
        </div>

        <div className="insightCard">
          <Sparkles size={18} />
          <p>
            Tu avatar no es solo estetica: sera la base visual para futuras recompensas, marcos y objetos
            desbloqueables en Fases 3, 4 y 5.
          </p>
        </div>
      </aside>
    </div>
  );
}
