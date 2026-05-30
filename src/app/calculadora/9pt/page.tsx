import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CombinationCalculator, NINE_PT_TABLE_DATA } from "@/components/calculator/combination-calculator";

export default function Calculator9PtPage() {
  return (
    <main className="calculatorPage calculatorPageGlow">
      <div className="goldSparkles" aria-hidden="true" />
      <Link className="backLink" href="/calculadora">
        <ArrowLeft size={18} />
        Volver
      </Link>
      <CombinationCalculator data={NINE_PT_TABLE_DATA} label="9PT" primaryLabel="DOMINION COIN" />
    </main>
  );
}
