import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CombinationCalculator } from "@/components/calculator/combination-calculator";

const hexagons = [
  { label: "3", color: "green", points: "150,18 189,41 189,86 150,109 111,86 111,41" },
  { label: "2", color: "gold", points: "72,91 111,114 111,159 72,182 33,159 33,114" },
  { label: "4", color: "cyan", points: "228,91 267,114 267,159 228,182 189,159 189,114" },
  { label: "1", color: "white", points: "150,161 189,184 189,229 150,252 111,229 111,184" },
  { label: "7", color: "red", points: "72,232 111,255 111,300 72,323 33,300 33,255" },
  { label: "5", color: "blue", points: "228,232 267,255 267,300 228,323 189,300 189,255" },
  { label: "6", color: "purple", points: "150,302 189,325 189,370 150,393 111,370 111,325" }
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
          <div className="orbitTextRing sevenPtOrbitTextRing" aria-hidden="true">
            <span>7PT</span>
            <span>7PT</span>
            <span>7PT</span>
            <span>7PT</span>
          </div>
          <svg className="sevenPtEmblem" viewBox="0 0 300 410" role="img" aria-label="7PT">
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
