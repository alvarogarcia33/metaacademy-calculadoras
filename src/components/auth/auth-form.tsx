"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { USER_GOALS } from "@/lib/constants";

type AuthFormMode = "login" | "register";

export function AuthForm({ mode }: { mode: AuthFormMode }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const isRegister = mode === "register";

  const handleSubmit = async (formData: FormData) => {
    setError("");

    const payload =
      mode === "register"
        ? {
            displayName: formData.get("displayName"),
            goal: formData.get("goal"),
            email: formData.get("email"),
            password: formData.get("password")
          }
        : {
            email: formData.get("email"),
            password: formData.get("password")
          };

    startTransition(async () => {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "No pudimos completar la solicitud.");
        return;
      }

      router.push(isRegister ? "/profile" : "/dashboard");
      router.refresh();
    });
  };

  return (
    <div className="authCard panel">
      <div className="authHeader">
        <p className="eyebrow">{isRegister ? "Empezar en menos de 5 minutos" : "Vuelve a tu progreso"}</p>
        <h1>{isRegister ? "Crea tu identidad MetaAcademy" : "Inicia sesion"}</h1>
        <p className="muted">
          {isRegister
            ? "Registra tu cuenta, define tu objetivo y activa una primera victoria desde hoy."
            : "Retoma tu dashboard, revisa tus metricas y sigue construyendo tu racha."}
        </p>
      </div>

      <form action={handleSubmit} className="formStack">
        {isRegister ? (
          <>
            <label className="fieldStack">
              <span>Nombre visible</span>
              <input className="textInput" defaultValue="" name="displayName" placeholder="Ej. Alvaro" required />
            </label>

            <label className="fieldStack">
              <span>Objetivo principal</span>
              <select className="textInput" defaultValue={USER_GOALS[0]} name="goal" required>
                {USER_GOALS.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : null}

        <label className="fieldStack">
          <span>Email</span>
          <input className="textInput" name="email" placeholder="tu@email.com" required type="email" />
        </label>

        <label className="fieldStack">
          <span>Contrasena</span>
          <input className="textInput" name="password" placeholder="Minimo 8 caracteres" required type="password" />
        </label>

        {error ? <p className="errorText">{error}</p> : null}

        <button className="button" disabled={isPending} type="submit">
          {isPending ? "Procesando..." : isRegister ? "Crear cuenta" : "Entrar"}
        </button>
      </form>

      <p className="muted compactMessage">
        {isRegister ? "Ya tienes cuenta?" : "Aun no tienes cuenta?"}{" "}
        <Link className="inlineLink" href={isRegister ? "/login" : "/register"}>
          {isRegister ? "Inicia sesion" : "Registrate"}
        </Link>
      </p>
    </div>
  );
}
