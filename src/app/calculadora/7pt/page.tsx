import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CombinationCalculator } from "@/components/calculator/combination-calculator";

const hexagons = [
  { label: "3", color: "green", points: "150,16 184,36 184,76 150,96 116,76 116,36" },
  { label: "2", color: "gold", points: "78,88 112,108 112,148 78,168 44,148 44,108" },
  { label: "4", color: "cyan", points: "222,88 256,108 256,148 222,168 188,148 188,108" },
  { label: "1", color: "white", points: "150,160 184,180 184,220 150,240 116,220 116,180" },
  { label: "7", color: "red", points: "78,232 112,252 112,292 78,312 44,292 44,252" },
  { label: "5", color: "blue", points: "222,232 256,252 256,292 222,312 188,292 188,252" },
  { label: "6", color: "purple", points: "150,304 184,324 184,364 150,384 116,364 116,324" }
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
          <svg className="sevenPtEmblem" viewBox="0 0 300 400" role="img" aria-label="7PT">
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
