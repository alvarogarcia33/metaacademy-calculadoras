import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CombinationCalculator } from "@/components/calculator/combination-calculator";

const hexagons = [
  { label: "3", color: "green", points: "150,16 184,36 184,76 150,96 116,76 116,36" },
  { label: "2", color: "gold", points: "80,94 114,114 114,154 80,174 46,154 46,114" },
  { label: "4", color: "cyan", points: "220,94 254,114 254,154 220,174 186,154 186,114" },
  { label: "1", color: "white", points: "150,172 184,192 184,232 150,252 116,232 116,192" },
  { label: "7", color: "red", points: "80,250 114,270 114,310 80,330 46,310 46,270" },
  { label: "5", color: "blue", points: "220,250 254,270 254,310 220,330 186,310 186,270" },
  { label: "6", color: "purple", points: "150,328 184,348 184,388 150,408 116,388 116,348" }
];

export default function Calculator7PtPage() {
  return (
    <main className="calculatorPage calculatorPageGlow">
      <div className="goldSparkles" aria-hidden="true" />
      <Link className="backLink" href="/calculadora">
        <ArrowLeft size={18} />
        Volver
      </Link>
      <section className="sevenPtEmblemPanel" aria-label="Emblema 7PT">
        <div className="sevenPtEmblemFrame">
          <svg className="sevenPtEmblem" viewBox="0 0 300 430" role="img" aria-label="7PT">
            {hexagons.map((hex) => (
              <g className={`sevenPtHex sevenPtHex-${hex.color}`} key={hex.label}>
                <polygon points={hex.points} />
                <text x={hex.points.split(" ")[0].split(",")[0]} y={Number(hex.points.split(" ")[0].split(",")[1]) + 48}>
                  {hex.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>
      <CombinationCalculator label="7PT" />
    </main>
  );
}
