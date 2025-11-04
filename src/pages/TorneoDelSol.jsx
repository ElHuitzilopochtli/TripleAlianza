
import { loadBracket } from "../utils/bracketState.js";
import BracketDisplay from "../components/BracketDisplay.jsx";
import React from "react";

export default function TorneoDelSol(){
  const discordInvite="https://discord.gg/9ttJUed5rR";
  const { rounds } = loadBracket("bracket:torneo-del-sol");
  return (<main className="min-h-screen bg-[#0b0b0b] text-white">
    <section className="mx-auto max-w-7xl px-4 pt-16 pb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold"><span className="text-yellow-400">Torneo del Sol</span> — Flash Cup</h1>
      <p className="mt-4 text-zinc-300 max-w-prose">Presentación oficial de Triple Alianza Esports. Formato ágil, abierto y con producción seria. ¡Sin límite de equipos!</p>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">Detalles</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-4">
            {[
              ["Formato","Eliminación directa. Bo3 durante todo el torneo."],
              ["Plataformas","Transmisión en YouTube/TikTok. Organización vía Discord."],
              ["Requisitos","5 jugadores + 1 suplente (opcional). Todos en el Discord."],
              ["Reporte","El capitán reporta resultado con captura en el Discord oficial."]
            ].map(([t,d])=> (<li key={t} className="rounded-xl border border-white/10 p-4 bg-white/5"><p className="font-semibold text-yellow-300">{t}</p><p className="text-zinc-300 text-sm mt-1">{d}</p></li>))}
          </ul>
          <h2 className="mt-10 text-2xl font-bold">Reglas rápidas</h2>
          <ol className="mt-4 list-decimal list-inside text-sm text-zinc-300 space-y-2">
            <li>Respeto total; cero toxicidad.</li>
            <li>Todos los jugadores deben estar en el servidor de Discord.</li>
            <li>Presentarse 10 minutos antes; 15 minutos de tolerancia = W.O.</li>
            <li>Prohibido hacks/macros; descalificación inmediata.</li>
            <li>Staff tiene la última palabra ante imprevistos.</li>
          </ol>
        </div>
        <aside className="space-y-3">
          <div className="rounded-xl border border-white/10 p-5 bg-gradient-to-br from-yellow-500/10 to-cyan-500/10">
            <p className="text-sm text-zinc-300">Fecha sugerida</p>
            <p className="text-2xl font-bold text-yellow-300">15 de Noviembre</p>
          </div>
          <div className="rounded-xl border border-white/10 p-5">
            <p className="text-sm text-zinc-300">Prize Pool:</p>
            <p className="text-lg font-semibold">8000 Diamantes</p>
          </div>
          <a href={discordInvite} target="_blank" rel="noreferrer" className="block text-center rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-5 py-3 font-semibold">Inscribir equipo (Discord)</a>
        </aside>
      </div>
    </section>


      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-bold mb-4">Bracket (32 equipos)</h2>
        <BracketDisplay rounds={rounds} />
      </section>
  


  </main>);
}