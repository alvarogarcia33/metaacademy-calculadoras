import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CombinationCalculator } from "@/components/calculator/combination-calculator";

export default function Calculator7PtPage() {
  return (
    <main className="calculatorPage calculatorPageGlow">
      <div className="goldSparkles" aria-hidden="true" />
      <Link className="backLink" href="/calculadora">
        <ArrowLeft size={18} />
        Volver
      </Link>
      <CombinationCalculator label="7PT" />
    </main>
  );
}
