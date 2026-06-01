import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CombinationCalculator, NINE_PT_TABLE_DATA } from "@/components/calculator/combination-calculator";

const hexagons = [
  { label: "9", color: "green", points: "150,14 181,32 181,68 150,86 119,68 119,32" },
  { label: "7", color: "cyan", points: "100,74 131,92 131,128 100,146 69,128 69,92" },
  { label: "8", color: "pink", points: "200,74 231,92 231,128 200,146 169,128 169,92" },
  { label: "4", color: "red", points: "50,154 81,172 81,208 50,226 19,208 19,172" },
  { label: "5", color: "gold", points: "150,154 181,172 181,208 150,226 119,208 119,172" },
  { label: "6", color: "lime", points: "250,154 281,172 281,208 250,226 219,208 219,172" },
  { label: "2", color: "blue", points: "100,234 131,252 131,288 100,306 69,288 69,252" },
  { label: "3", color: "purple", points: "200,234 231,252 231,288 200,306 169,288 169,252" },
  { label: "1", color: "white", points: "150,314 181,332 181,368 150,386 119,368 119,332" }
];

export default function Calculator9PtPage() {
  return (
    <main className="calculatorPage calculatorPageGlow">
      <div className="goldSparkles" aria-hidden="true" />
      <Link className="backLink" href="/calculadora">
        <ArrowLeft size={18} />
        Volver
      </Link>
      <section className="ninePtEmblemPanel" aria-label="Emblema 9PT">
        <div className="ninePtEmblemFrame">
          <div className="orbitTextRing" aria-hidden="true">
            <span>9PT</span>
            <span>9PT</span>
            <span>9PT</span>
            <span>9PT</span>
            <span>9PT</span>
            <span>9PT</span>
          </div>
          <svg className="ninePtEmblem" viewBox="0 0 300 400" role="img" aria-label="9PT">
            {hexagons.map((hex) => (
              <g className={`ninePtHex ninePtHex-${hex.color}`} key={hex.label}>
                <polygon points={hex.points} />
                <text x={hex.points.split(" ")[0].split(",")[0]} y={Number(hex.points.split(" ")[0].split(",")[1]) + 43}>
                  {hex.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>
      <CombinationCalculator data={NINE_PT_TABLE_DATA} label="9PT" primaryLabel="DOMINION COIN" />
    </main>
  );
}
