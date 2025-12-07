// src/pages/Competencias.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { buildBracket } from "../utils/bracket.js";

export default function Competencias() {
  const discordInvite = "https://discord.gg/9ttJUed5rR";

  const [tab, setTab] = useState("torneos"); // "ligas" | "torneos"
  const [teamsText] = useState(`Equipo A
Equipo B
Equipo C
Equipo D`);
  // Lo sigues teniendo por si luego quieres usar el bracket
  const { rounds } = buildBracket(teamsText.split("\n"));

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-5 py-2 rounded-full text-sm font-semibold border transition
        ${
          tab === id
            ? "bg-yellow-400 text-black border-yellow-300 shadow-[0_0_25px_rgba(250,204,21,.6)]"
            : "border-white/15 text-zinc-300 hover:bg-white/5"
        }`}
    >
      {children}
    </button>
  );

  return (
    <main className="min-h-screen bg-[#050509] text-white">
      {/* CABECERA */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-300 mb-1">
          Triple Alianza Esports
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold">Competencias</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl text-sm md:text-base">
          Aquí encontrarás nuestras ligas y torneos activos. Cuando lancemos
          nuevas ediciones, aparecerán en esta sección.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex items-center gap-3">
          <TabButton id="ligas">Ligas</TabButton>
          <TabButton id="torneos">Torneos</TabButton>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        {/* Vista LIGAS */}
        {tab === "ligas" && (
          <div className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5">
            <h2 className="text-2xl font-bold">Ligas</h2>
            <p className="mt-2 text-zinc-300 text-sm md:text-base">
              Aún no hay liga activa. Estamos preparando una temporada con 8
              equipos, formato regular + playoffs con premios en efectivo.
            </p>
            <p className="mt-2 text-xs md:text-sm text-zinc-500">
              Síguenos en Discord para enterarte del anuncio oficial.
            </p>
            <a
              href={discordInvite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-5 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-5 py-2 text-sm font-semibold"
            >
              Unirme al Discord
            </a>
          </div>
        )}

        {/* Vista TORNEOS */}
        {tab === "torneos" && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1) TORNEO DEL SOL — APERTURA (diseño actual) */}
            <article className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/15 via-[#050509] to-cyan-500/10 p-6 md:p-7 shadow-[0_0_40px_rgba(0,0,0,.6)]">
              <header className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-300">
                    Torneo del Sol
                  </p>
                  <h2 className="mt-1 text-xl md:text-2xl font-extrabold">
                    Apertura
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] uppercase tracking-wide border border-emerald-400/50">
                  Finalizado
                </span>
              </header>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-yellow-300">📅</span>
                  29–30 noviembre 2024
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-purple-300">🎮</span>
                  MLBB · 5v5 Clasificatoria
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-cyan-300">⚔️</span>
                  Formato: Bo3 · Eliminación directa
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-emerald-300">👥</span>
                  4 equipos participantes
                </span>
              </div>

              {/* Descripción */}
              <p className="mt-4 text-xs md:text-sm text-zinc-200 leading-relaxed">
                Flash cup de dos días organizada vía Discord. Bracket de
                eliminación directa, premios en efectivo y diamantes para la
                comunidad de Mobile Legends: Bang Bang en México.
              </p>

              <ul className="mt-3 text-[11px] md:text-xs text-zinc-300 space-y-1">
                <li>• Requisitos: 5 jugadores + (opcional) 1 suplente.</li>
                <li>• Reporte: capitán sube captura en #resultados.</li>
              </ul>

              {/* Botón */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/torneo-del-sol"
                  className="rounded-xl bg-yellow-400 text-black font-bold px-5 py-2 text-sm hover:bg-yellow-300"
                >
                  Ver resumen del torneo
                </Link>
              </div>
            </article>

            {/* 2) TORNEO DEL SOL — ENERO (nueva ficha) */}
            <article className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/15 via-[#050509] to-cyan-500/10 p-6 md:p-7 shadow-[0_0_40px_rgba(0,0,0,.6)]">
              <header className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-300">
                    Torneo del Sol
                  </p>
                  <h2 className="mt-1 text-xl md:text-2xl font-extrabold">
                    Enero
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-[11px] uppercase tracking-wide border border-yellow-400/70">
                  Próxima edición
                </span>
              </header>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-yellow-300">📅</span>
                  Enero 2025
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-purple-300">🎮</span>
                  MLBB · 5v5 Clasificatoria
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  <span className="text-cyan-300">⚔️</span>
                  Bo3 · Eliminación directa
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-orange-300/60">
                  <span className="text-orange-300">⚠️</span>
                  Cupos limitados por torneo
                </span>
              </div>

              {/* Descripción */}
              <p className="mt-4 text-xs md:text-sm text-zinc-200 leading-relaxed">
                Nueva edición del Torneo del Sol pensada como Flash Cup de
                inicio de año. Fechas, premios y registro se publicarán en el
                servidor de Discord de Triple Alianza.
              </p>

              <ul className="mt-3 text-[11px] md:text-xs text-zinc-300 space-y-1">
                <li>• Anuncio completo y reglamento en Discord.</li>
                <li>• Prioridad para equipos activos de la comunidad.</li>
                <li>• Clasificatorios para futuros proyectos y ligas.</li>
              </ul>

              {/* Botones */}
              <div className="mt-5 flex flex-wrap gap-3">
                {/* Ruta placeholder, cámbiala cuando tengas la página de enero */}
                <Link
                  to="/torneo-del-sol-enero"
                        className="rounded-xl bg-yellow-400 text-black font-bold px-5 py-2 text-sm hover:bg-yellow-300"
                >
                  Ver anuncio
                </Link>
                <a
                  href={discordInvite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-5 py-2 text-sm font-semibold"
                >
                  Unirme al Discord
                </a>
              </div>
            </article>

            {/* 3) PRÓXIMO TORNEO (después de Enero) */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 md:col-span-2">
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold">
                    Próximo torneo
                  </h2>
                  <p className="mt-2 text-xs md:text-sm text-zinc-300 max-w-xl">
                    Estamos preparando nuevas ediciones para 2025: flash cups y
                    showmatches especiales con la comunidad de Triple Alianza.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-zinc-700/40 text-zinc-200 text-[11px] uppercase tracking-wide border border-zinc-500/60">
                  Muy pronto
                </span>
              </header>

              <ul className="mt-4 text-[11px] md:text-xs text-zinc-300 space-y-1">
                <li>• Anuncios primero en Discord.</li>
                <li>• Cupos limitados por torneo.</li>
                <li>• Clasificatorios para futuros proyectos.</li>
              </ul>

              <div className="mt-5">
                <a
                  href={discordInvite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-5 py-2 text-sm font-semibold"
                >
                  Unirme al Discord
                </a>
              </div>
            </article>
          </div>
        )}
      </section>
    </main>
  );
}
