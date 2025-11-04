import React, { useEffect, useState } from "react";

import {
  emptyBracket32, loadBracket, saveBracket,
  setTeamAtR32, setWinner, clearWinnersFromRound
} from "../utils/bracketState.js";
import BracketDisplay from "../components/BracketDisplay.jsx";

export default function AdminTorneoDelSol() {
  const STORAGE_KEY = "bracket:torneo-del-sol";
  const [state, setState] = useState(emptyBracket32());

  useEffect(() => { setState(loadBracket(STORAGE_KEY)); }, []);

  const update = (fn) => {
    setState(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      fn(copy);
      saveBracket(copy, STORAGE_KEY);
      return copy;
    });
  };



  
  const exportJson = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "bracket-torneo-del-sol.json"; a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (parsed?.rounds) {
          saveBracket(parsed, STORAGE_KEY);
          setState(parsed);
        } else {
          alert("JSON inválido");
        }
      } catch {
        alert("No se pudo leer el archivo");
      }
    };
    reader.readAsText(file);
  };

  const resetAll = () => {
    if (confirm("¿Resetear todo el bracket?")) {
      const fresh = emptyBracket32();
      saveBracket(fresh, STORAGE_KEY);
      setState(fresh);
    }
  };

  const sizes = [16, 8, 4, 2, 1];
  const labels = ["Ronda de 32", "Ronda de 16", "Cuartos", "Semifinales", "Final"];

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-6">
        <h1 className="text-3xl font-extrabold">Admin — Torneo del Sol</h1>
        <p className="text-zinc-300 mt-2 text-sm">
          Rellena los 32 equipos y marca ganadores por match. Los cambios se guardan en tu navegador (localStorage).  
          La página pública del Torneo del Sol leerá estos datos.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <button onClick={exportJson} className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/5">
            Exportar JSON
          </button>
          <label className="rounded-lg border border-white/20 px-3 py-2 hover:bg-white/5 cursor-pointer">
            Importar JSON
            <input type="file" accept="application/json" className="hidden" onChange={(e)=> e.target.files[0] && importJson(e.target.files[0])}/>
          </label>
          <button onClick={resetAll} className="rounded-lg border border-red-400/40 text-red-300 px-3 py-2 hover:bg-red-500/10">
            Resetear todo
          </button>
        </div>
      </section>



      {/* Inputs R32 */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <h2 className="text-xl font-bold mb-3">Equipos — Ronda de 32</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 32 }).map((_, idx) => {
            const m = Math.floor(idx / 2), side = idx % 2 === 0 ? "a" : "b";
            const val = state.rounds[0][m][side] || "";
            return (
              <input
                key={idx}
                className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder={`Equipo ${idx + 1}`}
                value={val}
                onChange={(e) => update(s => setTeamAtR32(s, idx, e.target.value))}
              />
            );
          })}
        </div>
      </section>

      {/* Selección de ganadores por rondas */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <h2 className="text-xl font-bold mb-3">Ganadores por ronda</h2>
        <div className="w-full overflow-x-auto">
          <div className="grid gap-6 min-w-[1100px]" style={{ gridTemplateColumns: `repeat(${sizes.length}, minmax(220px,1fr))` }}>
            {state.rounds.map((matches, rIdx) => (
              <div key={rIdx} className="space-y-4">
                <p className="text-sm font-semibold text-zinc-400">{labels[rIdx]}</p>
                {matches.map((m, mIdx) => (
                  <div key={mIdx} className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`r${rIdx}m${mIdx}`}
                        checked={m.winner === "a"}
                        onChange={() => update(s => setWinner(s, rIdx, mIdx, "a"))}
                      />
                      <span className="text-sm">{m.a || "—"}</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`r${rIdx}m${mIdx}`}
                        checked={m.winner === "b"}
                        onChange={() => update(s => setWinner(s, rIdx, mIdx, "b"))}
                      />
                      <span className="text-sm">{m.b || "—"}</span>
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vista previa */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-xl font-bold mb-3">Vista pública (preview)</h2>
        <BracketDisplay rounds={state.rounds} />
      </section>
    </main>
  );
}
