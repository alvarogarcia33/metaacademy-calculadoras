import Link from "next/link";
import { ArrowRight, Coins, Flame, Gamepad2, ShieldCheck, Sparkles, Star, Trophy, Zap } from "lucide-react";

import { MetaMascot } from "@/components/mascot/meta-mascot";
import { getCurrentUser } from "@/lib/auth";

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <main className="marketingPage">
      <header className="marketingNav panel holoPanel">
        <Link className="brand" href="/">
          <span className="brandMark">M</span>
          <div>
            <p className="brandName">MetaAcademy</p>
            <p className="brandTag">Educacion gamificada para el nuevo mundo digital</p>
          </div>
        </Link>

        <div />

        <div className="navActions">
          {user ? (
            <Link className="button" href="/dashboard">
              Ir a mi dashboard
            </Link>
          ) : (
            <>
              <Link className="button buttonSecondary" href="/login">
                Iniciar sesion
              </Link>
              <Link className="button" href="/register">
                Empezar ahora
              </Link>
            </>
          )}
        </div>
      </header>

      <section className="heroCard panel gameHero">
        <div className="heroSplit heroSplitGame">
          <div className="heroNarrative">
            <div className="heroTopline">
              <p className="eyebrow">Fase 1 ya navegable</p>
              <span className="questPill">Companion online</span>
            </div>
            <h1 className="heroTitle heroTitleGame">Aprende Web3 con la energia de una aventura diaria.</h1>
            <p className="heroLead">
              MetaAcademy ya no se presenta como un curso plano. Te recibe con misiones, progreso, avatar y
              una mascota que salta contigo para convertir cada regreso en una pequena victoria.
            </p>

            <div className="heroActions">
              <Link className="button" href={user ? "/dashboard" : "/register"}>
                {user ? "Seguir avanzando" : "Crear cuenta"}
                <ArrowRight size={18} />
              </Link>
              <Link className="button buttonSecondary" href="/login">
                Ver acceso
              </Link>
              <Link className="button buttonSecondary" href="/calculadora">
                Calculadora
              </Link>
            </div>

            <div className="heroMeterRow">
              <div className="heroMeterCard">
                <Flame size={18} />
                <div>
                  <strong>Racha encendida</strong>
                  <span>Premios diarios y sensacion inmediata de avance</span>
                </div>
              </div>
              <div className="heroMeterCard">
                <Coins size={18} />
                <div>
                  <strong>Economia visible</strong>
                  <span>Spark y MetaCoins ya pintan una meta concreta</span>
                </div>
              </div>
              <div className="heroMeterCard">
                <Star size={18} />
                <div>
                  <strong>Companion vivo</strong>
                  <span>Un personaje que saluda, vibra y le da alegria al sitio</span>
                </div>
              </div>
            </div>

            <div className="heroProof heroProofGame">
              <div className="proofCard proofCardHighlight">
                <strong>4 mundos</strong>
                <span>Listos para sentirse como zonas desbloqueables en Fase 2</span>
              </div>
              <div className="proofCard">
                <strong>&lt; 5 min</strong>
                <span>Onboarding pensado para entregar una primera victoria rapida</span>
              </div>
              <div className="proofCard">
                <strong>Joy first</strong>
                <span>Movimiento, luces y personaje para que se sienta mas juego y menos SaaS</span>
              </div>
            </div>
          </div>

          <div className="heroVisualStack">
            <MetaMascot
              badge="Companion activo"
              subtitle="Salto, saludo y te empujo a desbloquear tu primer mundo desde la primera pantalla."
              title="Hola, soy Meta."
              variant="hero"
            />

            <div className="questBoard panel">
              <div className="questBoardHeader">
                <div>
                  <p className="eyebrow">Ruta de arranque</p>
                  <h3>Tu primera secuencia de recompensas</h3>
                </div>
                <span className="questScore">+120 XP</span>
              </div>

              <div className="questPath">
                <div className="questStep">
                  <span className="questStepNode">1</span>
                  <div className="questStepCopy">
                    <strong>Crea tu perfil</strong>
                    <p>Define objetivo y activa tu identidad digital.</p>
                  </div>
                </div>
                <div className="questStep">
                  <span className="questStepNode">2</span>
                  <div className="questStepCopy">
                    <strong>Elige companion</strong>
                    <p>Tu personaje ahora ya aparece y le da vida al recorrido.</p>
                  </div>
                </div>
                <div className="questStep">
                  <span className="questStepNode questStepNodeLocked">3</span>
                  <div className="questStepCopy">
                    <strong>Desbloquea el mapa</strong>
                    <p>Preparamos el terreno para mundos, rutas y nodos jugables.</p>
                  </div>
                </div>
              </div>

              <div className="questRewardBar">
                <span className="questRewardChip">Spark inicial</span>
                <span className="questRewardChip">MetaCoins demo</span>
                <span className="questRewardChip">Mision diaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metricStrip panel gameRibbon">
        <div className="heroMetrics">
          <div className="metricCard">
            <strong>Onboarding guiado</strong>
            <span>Registro, objetivo, avatar y acceso protegido</span>
          </div>
          <div className="metricCard">
            <strong>Dashboard real</strong>
            <span>Nivel, XP, racha, Spark y MetaCoins visibles</span>
          </div>
          <div className="metricCard">
            <strong>Persistencia local</strong>
            <span>Almacenamiento JSON para iterar sin bloquear la V1</span>
          </div>
          <div className="metricCard">
            <strong>Arquitectura escalable</strong>
            <span>Base preparada para mapa, lecciones, tienda y admin</span>
          </div>
        </div>
      </section>

      <section className="featureGrid featureGridGame">
        <article className="featureCard panel">
          <Gamepad2 size={22} />
          <h3>Mas vibe de juego</h3>
          <p>
            El lenguaje visual ahora apunta a companion, mision, brillo, ruta y recompensa desde el primer scroll.
          </p>
        </article>

        <article className="featureCard panel">
          <Zap size={22} />
          <h3>Movimiento que celebra</h3>
          <p>Saltos, saludo, flotacion, glow y microenergias para que la pantalla ya tenga pulso propio.</p>
        </article>

        <article className="featureCard panel">
          <Coins size={22} />
          <h3>Economia con fantasia</h3>
          <p>Spark y MetaCoins dejan de ser simples datos y empiezan a sentirse como botin y progreso.</p>
        </article>

        <article className="featureCard panel">
          <Trophy size={22} />
          <h3>Primera victoria real</h3>
          <p>La promesa ya es clara: entrar, elegir identidad y sentir que algo vivo te acompana.</p>
        </article>

        <article className="featureCard panel">
          <Sparkles size={22} />
          <h3>Escena emocional</h3>
          <p>El companion ayuda a construir alegria de marca, no solo funcionalidad o contenido.</p>
        </article>

        <article className="featureCard panel">
          <ShieldCheck size={22} />
          <h3>Base solida debajo del show</h3>
          <p>La experiencia se ve mucho mas viva sin sacrificar auth, persistencia ni estructura escalable.</p>
        </article>
      </section>
    </main>
  );
}
