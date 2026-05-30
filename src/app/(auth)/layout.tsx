import Link from "next/link";
import { Compass, Shield, Zap } from "lucide-react";

import { MetaMascot } from "@/components/mascot/meta-mascot";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="authPage">
      <div className="authShell">
        <section className="authInfo panel authInfoGame">
          <Link className="brand" href="/">
            <span className="brandMark">M</span>
            <div>
              <p className="brandName">MetaAcademy</p>
              <p className="brandTag">V1 desde cero, construida por fases</p>
            </div>
          </Link>

          <p className="eyebrow">Base funcional de lanzamiento</p>
          <h2>Una plataforma educativa que se siente como progreso real.</h2>
          <p>
            Esta primera entrega cubre autenticacion, perfil, avatar y dashboard con una direccion visual ya
            alineada al producto final.
          </p>

          <div className="infoList">
            <div>
              <Compass size={18} />
              <strong>Fase 1 lista</strong>
              <p className="muted">Estructura navegable para crecer hacia mapa, rutas, nodos y lecciones.</p>
            </div>
            <div>
              <Zap size={18} />
              <strong>Primera victoria rapida</strong>
              <p className="muted">El flujo reduce friccion y deja al usuario con sensacion de avance temprano.</p>
            </div>
            <div>
              <Shield size={18} />
              <strong>Persistencia local segura para prototipo</strong>
              <p className="muted">Sesiones firmadas y almacenamiento JSON para iterar sin bloquearte por backend.</p>
            </div>
          </div>

          <MetaMascot
            badge="Companion listo"
            subtitle="Entra, saluda y activa tu primera mision con una energia mucho mas viva."
            title="Tu guia ya esta despierto."
            variant="card"
          />
        </section>

        {children}
      </div>
    </main>
  );
}
