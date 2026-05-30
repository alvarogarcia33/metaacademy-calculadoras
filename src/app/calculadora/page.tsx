import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function CalculatorHubPage() {
  return (
    <main className="calculatorLanding">
      <div className="goldSparkles" aria-hidden="true" />
      <section className="calculatorLandingHero">
        <p className="eyebrow">Selecciona una tabla</p>
        <h1>Calculadoras</h1>
        <div className="imperiumLogoFrame" aria-label="Imperium">
          <Image alt="Imperium" height={300} priority src="/imperium-logo.jpeg" width={300} />
        </div>
        <div className="calculatorChoiceGrid" aria-label="Calculadoras disponibles">
          <Link className="neonChoice neonChoiceSeven" href="/calculadora/7pt">
            <Sparkles size={28} />
            <span>7PT</span>
          </Link>
          <Link className="neonChoice neonChoiceNine" href="/calculadora/9pt">
            <Sparkles size={28} />
            <span>9PT</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
