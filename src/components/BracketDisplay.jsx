import React from "react";

// Muestra el bracket (sin inputs). Recibe { rounds } del estado.
export default function BracketDisplay({ rounds = [] }) {
  if (!rounds?.length) return null;
  const labels = ["Ronda de 32", "Ronda de 16", "Cuartos", "Semifinales", "Final"];

  return (
    <div className="w-full overflow-x-auto">
      <div
        className="grid gap-6 min-w-[1100px]"
        style={{ gridTemplateColumns: `repeat(${rounds.length}, minmax(220px, 1fr))` }}
      >
        {rounds.map((matches, rIdx) => (
          <div key={rIdx} className="space-y-4">
            <p className="text-sm font-semibold text-zinc-400">{labels[rIdx] ?? `Ronda ${rIdx + 1}`}</p>
            {matches.map((m, mIdx) => (
              <div key={mIdx} className="relative">
                {rIdx < rounds.length - 1 && (
                  <div className="hidden md:block absolute right-[-16px] top-1/2 w-4 h-[2px] bg-white/10" />
                )}
                <MatchCard a={m.a} b={m.b} winner={m.winner} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MatchCard({ a = "", b = "", winner = null }) {
  const cell = (name, isWinner) => (
    <div
      className={`rounded-lg px-3 py-2 border ${
        isWinner
          ? "border-yellow-400 bg-yellow-400/20 text-yellow-300"
          : "border-white/10 bg-white/5 text-white"
      }`}
    >
      {name || "—"}
    </div>
  );
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
      {cell(a, winner === "a")}
      {cell(b, winner === "b")}
    </div>
  );
}
