"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    setError("");

    startTransition(async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST"
      });

      if (!response.ok) {
        setError("No pudimos cerrar sesion. Intenta otra vez.");
        return;
      }

      router.push("/");
      router.refresh();
    });
  };

  return (
    <div className="logoutStack">
      <button className="button buttonSecondary" disabled={isPending} onClick={handleLogout} type="button">
        {isPending ? "Cerrando..." : "Cerrar sesion"}
      </button>
      {error ? <p className="errorText compactMessage">{error}</p> : null}
    </div>
  );
}
