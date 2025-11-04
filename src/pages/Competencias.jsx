
// ...importa arriba del archivo:
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { buildBracket } from "../utils/bracket.js";

export default function Competencias() {
  const discordInvite = "https://discord.gg/9ttJUed5rR";
  const [tab, setTab] = useState("torneos"); // "ligas" | "torneos"
  const [teamsText, setTeamsText] = useState(`Equipo A
Equipo B
Equipo C
Equipo D`);
const { rounds } = buildBracket(teamsText.split("\n"));

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-4 py-2 rounded-lg text-sm font-semibold border transition
      ${tab === id
        ? "bg-yellow-400 text-black border-yellow-300"
        : "border-white/15 text-zinc-300 hover:bg-white/5"}`}
    >
      {children}
    </button>
  );

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold">Competencias</h1>
        <p className="mt-3 text-zinc-300 max-w-prose">
          Aquí encontrarás nuestras ligas y torneos activos. Cuando lancemos nuevas ediciones, aparecerán en esta sección.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex items-center gap-2">
          <TabButton id="ligas">Ligas</TabButton>
          <TabButton id="torneos">Torneos</TabButton>
        </div>
      </section>

      {/* Contenido */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        {tab === "ligas" && (
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-2xl font-bold">Ligas</h2>
            <p className="mt-2 text-zinc-300">
              Aún no hay liga activa. Estamos preparando una temporada con 8 equipos, formato regular + playoffs con premios en efectivo.
            </p>
            <p className="mt-2 text-sm text-zinc-500">Síguenos en Discord para enterarte del anuncio oficial.</p>
          </div>
        )}

        {tab === "torneos" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card del Torneo del Sol */}
            <article className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-yellow-500/10 to-cyan-500/10">
              <h3 className="text-xl font-extrabold">
                ☀️ Torneo del Sol — <span className="text-yellow-300">Flash Cup</span>
              </h3>
              <p className="mt-2 text-zinc-300 text-sm">
                Eliminación directa. Torneo de 2 dias al Bo3. Organización vía Discord. con un maximo de 32 Equipos.
              </p>
              <ul className="mt-3 text-xs text-zinc-400 space-y-1">
                <li>• Requisitos: 5 jugadores + (opcional) 1 suplente.</li>
                <li>• Reporte: capitán sube captura en #resultados.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/torneo-del-sol"
                  className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/5 text-sm"
                >
                  Ver detalles
                </Link>
                <a
                  href={discordInvite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-yellow-400 text-black font-bold px-4 py-2 hover:bg-yellow-300 text-sm"
                >
                  Inscribir equipo (Discord)
                </a>
              </div>
            </article>

            {/* Espacio para próximos torneos */}
            <article className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-extrabold">Próximo torneo</h3>
              <p className="mt-2 text-zinc-300 text-sm">Muy pronto…</p>
            </article>
          </div>



// Dentro del componente Competencias (añade este bloque donde prefieras):

// En el return JSX, dentro de la sección de contenido:




        )}
      </section>


    </main>
  );
}
