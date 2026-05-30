"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

type CombinationRow = {
  combination: string;
  primaryOld: number;
  primaryNew: number;
  reexOld: number;
  reexNew: number;
  hmapOld: number;
  hmapNew: number;
};

type Counts = Record<string, { old: number; new: number }>;

export const SEVEN_PT_TABLE_DATA: CombinationRow[] = [
  { combination: "1X1", primaryOld: 0.05, primaryNew: 0.05, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "2X2", primaryOld: 0.075, primaryNew: 0.075, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "3X3", primaryOld: 0.125, primaryNew: 0.125, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "6X6", primaryOld: 0.25, primaryNew: 0.25, reexOld: 0.2, reexNew: 0.6, hmapOld: 0.1, hmapNew: 0 },
  { combination: "9X9", primaryOld: 0.375, primaryNew: 0.375, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "12X12", primaryOld: 0.5, primaryNew: 0.5, reexOld: 0.2, reexNew: 1, hmapOld: 0.2, hmapNew: 0 },
  { combination: "15X15", primaryOld: 0.625, primaryNew: 0.625, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "18X18", primaryOld: 0.75, primaryNew: 0.75, reexOld: 0.4, reexNew: 2, hmapOld: 0.3, hmapNew: 0 },
  { combination: "21X21", primaryOld: 1, primaryNew: 1, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "25X25", primaryOld: 1.25, primaryNew: 1.25, reexOld: 2, reexNew: 4.4, hmapOld: 1.2, hmapNew: 0 },
  { combination: "38X38", primaryOld: 1.5, primaryNew: 1.5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "50X50", primaryOld: 2, primaryNew: 2, reexOld: 2, reexNew: 10, hmapOld: 1.4, hmapNew: 2 },
  { combination: "62X62", primaryOld: 2.5, primaryNew: 2.5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "75X75", primaryOld: 3, primaryNew: 3, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "88X88", primaryOld: 3.5, primaryNew: 3.5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "100X100", primaryOld: 4, primaryNew: 4, reexOld: 4, reexNew: 18, hmapOld: 3.4, hmapNew: 7 },
  { combination: "120X120", primaryOld: 4.5, primaryNew: 4.5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "140X140", primaryOld: 5, primaryNew: 5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "160X160", primaryOld: 5.5, primaryNew: 5.5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "180X180", primaryOld: 6, primaryNew: 6, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "200X200", primaryOld: 6.5, primaryNew: 6.5, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "225X225", primaryOld: 7, primaryNew: 7, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "250X250", primaryOld: 14, primaryNew: 14, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 }
];

export const NINE_PT_TABLE_DATA: CombinationRow[] = [
  { combination: "3X3", primaryOld: 1, primaryNew: 1, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "6X6", primaryOld: 2, primaryNew: 2, reexOld: 0.2, reexNew: 0.6, hmapOld: 0.2, hmapNew: 0 },
  { combination: "12X12", primaryOld: 3, primaryNew: 3, reexOld: 0.2, reexNew: 1, hmapOld: 0.4, hmapNew: 0 },
  { combination: "18X18", primaryOld: 4, primaryNew: 4, reexOld: 0.4, reexNew: 2, hmapOld: 0.8, hmapNew: 0 },
  { combination: "25X25", primaryOld: 5, primaryNew: 5, reexOld: 2, reexNew: 4.4, hmapOld: 1.2, hmapNew: 0 },
  { combination: "38X38", primaryOld: 8, primaryNew: 8, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "50X50", primaryOld: 8, primaryNew: 8, reexOld: 2, reexNew: 6, hmapOld: 3, hmapNew: 1 },
  { combination: "62X62", primaryOld: 13, primaryNew: 13, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "75X75", primaryOld: 14, primaryNew: 14, reexOld: 2, reexNew: 10, hmapOld: 6, hmapNew: 2 },
  { combination: "88X88", primaryOld: 22, primaryNew: 22, reexOld: 0, reexNew: 0, hmapOld: 0, hmapNew: 0 },
  { combination: "100X100", primaryOld: 31, primaryNew: 31, reexOld: 4, reexNew: 16, hmapOld: 13, hmapNew: 7 }
];

function createEmptyCounts(data: CombinationRow[]) {
  return data.reduce<Counts>((acc, row) => {
  acc[row.combination] = { old: 0, new: 0 };
  return acc;
  }, {});
}

function formatAmount(value: number) {
  return new Intl.NumberFormat("es-UY", {
    maximumFractionDigits: 3,
    minimumFractionDigits: value > 0 && value < 1 ? 3 : 0
  }).format(value);
}

export function CombinationCalculator({
  data = SEVEN_PT_TABLE_DATA,
  label = "7PT",
  primaryLabel = "GAME GOS"
}: {
  data?: CombinationRow[];
  label?: string;
  primaryLabel?: string;
}) {
  const emptyCounts = useMemo(() => createEmptyCounts(data), [data]);
  const [counts, setCounts] = useState<Counts>(() => createEmptyCounts(data));
  const [investedAmount, setInvestedAmount] = useState("");

  const totals = useMemo(() => {
    return data.reduce(
      (acc, row) => {
        const rowCounts = counts[row.combination] ?? { old: 0, new: 0 };
        acc.old += rowCounts.old;
        acc.new += rowCounts.new;
        acc.combinations += rowCounts.old + rowCounts.new;
        acc.primary += rowCounts.old * row.primaryOld + rowCounts.new * row.primaryNew;
        acc.reex += rowCounts.old * row.reexOld + rowCounts.new * row.reexNew;
        acc.hmap += rowCounts.old * row.hmapOld + rowCounts.new * row.hmapNew;
        return acc;
      },
      { old: 0, new: 0, combinations: 0, primary: 0, reex: 0, hmap: 0 }
    );
  }, [counts, data]);

  const invested = Number.parseFloat(investedAmount.replace(",", ".")) || 0;
  const generatedEarnings = totals.reex * 25 + totals.hmap * 50;
  const balance = invested - generatedEarnings;

  const updateCount = (combination: string, table: "old" | "new", amount: number) => {
    setCounts((current) => {
      const rowCounts = current[combination] ?? { old: 0, new: 0 };
      return {
        ...current,
        [combination]: {
          ...rowCounts,
          [table]: Math.max(0, rowCounts[table] + amount)
        }
      };
    });
  };

  const setManualCount = (combination: string, table: "old" | "new", value: string) => {
    const parsed = Math.max(0, Number.parseInt(value || "0", 10));
    setCounts((current) => ({
      ...current,
      [combination]: {
        ...(current[combination] ?? { old: 0, new: 0 }),
        [table]: Number.isFinite(parsed) ? parsed : 0
      }
    }));
  };

  return (
    <div className="calculatorShell">
      <section className="financePanel" aria-label="Resumen financiero en euros">
        <label className="financeInputGroup">
          <span>Monto invertido</span>
          <div className="euroInputWrap">
            <input
              aria-label="Monto invertido"
              inputMode="decimal"
              min={0}
              onChange={(event) => setInvestedAmount(event.target.value)}
              placeholder="0"
              type="number"
              value={investedAmount}
            />
            <strong>EUR</strong>
          </div>
        </label>

        <div className="financeMetric">
          <span>Ganancias generadas</span>
          <strong>{formatEuros(generatedEarnings)}</strong>
          <small>REEX x 25 + HMAP x 50</small>
        </div>

        <div className="financeMetric">
          <span>Saldo</span>
          <strong className={balance >= 0 ? "positiveNumber" : "negativeNumber"}>{formatEuros(balance)}</strong>
          <small>Inversion - ganancias</small>
        </div>
      </section>

      <section className="calculatorSummary" aria-label="Totales calculados">
        <div className="summaryTile summaryTileAccent">
          <span>Combinaciones</span>
          <strong>{totals.combinations}</strong>
          <small>{totals.old} vieja / {totals.new} nueva</small>
        </div>
        <div className="summaryTile">
          <span>{primaryLabel}</span>
          <strong>{formatAmount(totals.primary)}</strong>
          <small>Total acumulado</small>
        </div>
        <div className="summaryTile">
          <span>REEX Coin</span>
          <strong>{formatAmount(totals.reex)}</strong>
          <small>Total acumulado</small>
        </div>
        <div className="summaryTile">
          <span>HMAP Coin</span>
          <strong>{formatAmount(totals.hmap)}</strong>
          <small>Total acumulado</small>
        </div>
      </section>

      <div className="calculatorToolbar">
        <div>
          <p className="eyebrow">{label}</p>
          <h1>Calculadora de combinaciones</h1>
        </div>
        <button className="iconTextButton" type="button" onClick={() => setCounts(emptyCounts)}>
          <RotateCcw size={18} />
          Reiniciar
        </button>
      </div>

      <div className="calculatorTableWrap">
        <table className="calculatorTable">
          <thead>
            <tr>
              <th rowSpan={2}>Combinacion</th>
              <th colSpan={2}>Cantidad</th>
            </tr>
            <tr>
              <th>Vieja</th>
              <th>Nueva</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const rowCounts = counts[row.combination] ?? { old: 0, new: 0 };
              return (
                <tr key={row.combination}>
                  <th scope="row">{row.combination}</th>
                  <td>
                    <Stepper
                      label={`${row.combination} tabla vieja`}
                      value={rowCounts.old}
                      onDecrease={() => updateCount(row.combination, "old", -1)}
                      onIncrease={() => updateCount(row.combination, "old", 1)}
                      onChange={(value) => setManualCount(row.combination, "old", value)}
                    />
                  </td>
                  <td>
                    <Stepper
                      label={`${row.combination} tabla nueva`}
                      value={rowCounts.new}
                      onDecrease={() => updateCount(row.combination, "new", -1)}
                      onIncrease={() => updateCount(row.combination, "new", 1)}
                      onChange={(value) => setManualCount(row.combination, "new", value)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <section className="referencePanel" aria-label="Pagos por combinacion">
        <div className="referenceHeader">
          <div>
            <p className="eyebrow">Referencia</p>
            <h2>Pago por combinacion</h2>
          </div>
        </div>

        <div className="referenceTableWrap">
          <table className="referenceTable">
            <thead>
              <tr>
                <th rowSpan={2}>Combinacion</th>
                <th colSpan={2}>{primaryLabel}</th>
                <th colSpan={2}>REEX Coin</th>
                <th colSpan={2}>HMAP Coin</th>
              </tr>
              <tr>
                <th>Vieja</th>
                <th>Nueva</th>
                <th>Vieja</th>
                <th>Nueva</th>
                <th>Vieja</th>
                <th>Nueva</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={`reference-${row.combination}`}>
                  <th scope="row">{row.combination}</th>
                  <td>{formatRate(row.primaryOld)}</td>
                  <td>{formatRate(row.primaryNew)}</td>
                  <td>{formatRate(row.reexOld)}</td>
                  <td>{formatRate(row.reexNew)}</td>
                  <td>{formatRate(row.hmapOld)}</td>
                  <td>{formatRate(row.hmapNew)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function formatRate(value: number) {
  return value ? formatAmount(value) : "-";
}

function formatEuros(value: number) {
  return new Intl.NumberFormat("es-UY", {
    currency: "EUR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: "currency"
  }).format(value);
}

function Stepper({
  label,
  value,
  onChange,
  onDecrease,
  onIncrease
}: {
  label: string;
  value: number;
  onChange: (value: string) => void;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="stepper" aria-label={label}>
      <button type="button" onClick={onDecrease} aria-label={`Restar ${label}`} disabled={value === 0}>
        <Minus size={16} />
      </button>
      <input
        aria-label={label}
        inputMode="numeric"
        min={0}
        onChange={(event) => onChange(event.target.value)}
        type="number"
        value={value}
      />
      <button type="button" onClick={onIncrease} aria-label={`Sumar ${label}`}>
        <Plus size={16} />
      </button>
    </div>
  );
}
