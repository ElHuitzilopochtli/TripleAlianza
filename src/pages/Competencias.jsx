import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { buildBracket } from "../utils/bracket.js";
import BracketDisplay from "../components/BracketDisplay.jsx";

const DEFAULT_TEAMS = [
  "Equipo A",
  "Equipo B",
  "Equipo C",
  "Equipo D",
  "Equipo E",
  "Equipo F",
  "Equipo G",
  "Equipo H",
].join("\n");

export default function Competencias() {
  const discordInvite = "https://discord.gg/9ttJUed5rR";
  const [tab, setTab] = useState("torneos");
  const [teamsText, setTeamsText] = useState(DEFAULT_TEAMS);
  const [ordering, setOrdering] = useState("original");
  const [shuffleSeed, setShuffleSeed] = useState(null);

  const { uniqueTeams, duplicates, totalInput } = useMemo(() => {
    const parsed = teamsText
      .split("\n")
      .map((team) => team.trim())
      .filter(Boolean);

    const seen = new Set();
    const deduped = [];
    const dupes = [];

    parsed.forEach((team) => {
      const key = team.toLocaleLowerCase();
      if (seen.has(key)) {
        dupes.push(team);
        return;
      }
      seen.add(key);
      deduped.push(team);
    });

    return {
      uniqueTeams: deduped,
      duplicates: dupes,
      totalInput: parsed.length,
    };
  }, [teamsText]);

  const cleanedTeams = useMemo(() => {
    if (ordering !== "random" || !uniqueTeams.length) {
      return uniqueTeams;
    }
    return shuffleWithSeed(uniqueTeams, shuffleSeed ?? Date.now());
  }, [ordering, uniqueTeams, shuffleSeed]);

  const bracket = useMemo(() => buildBracket(cleanedTeams), [cleanedTeams]);

  const previewRounds = useMemo(
    () =>
      bracket.rounds.map((round) =>
        round.map(([a, b]) => ({ a, b, winner: null }))
      ),
    [bracket]
  );

  const hasPreview = previewRounds.length > 0;
  const teamCount = cleanedTeams.length;
  const bracketSize = teamCount > 0 ? 2 ** Math.ceil(Math.log2(teamCount)) : 0;
  const byes = bracketSize > 0 ? bracketSize - teamCount : 0;
  const totalMatches = useMemo(
    () => bracket.rounds.reduce((acc, round) => acc + round.length, 0),
    [bracket.rounds]
  );

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-4 py-2 rounded-lg text-sm font-semibold border transition
      ${
        tab === id
          ? "bg-yellow-400 text-black border-yellow-300"
          : "border-white/15 text-zinc-300 hover:bg-white/5"
      }`}
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
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card del Torneo del Sol */}
              <article className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-yellow-500/10 to-cyan-500/10">
                <h3 className="text-xl font-extrabold">
                  ☀️ Torneo del Sol — <span className="text-yellow-300">Flash Cup</span>
                </h3>
                <p className="mt-2 text-zinc-300 text-sm">
                  Eliminación directa. Torneo de 2 dias al Bo3. Organización vía Discord con un máximo de 32 equipos.
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

            {/* Generador de bracket */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                <div>
                  <h3 className="text-xl font-bold">Genera un bracket provisional</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Escribe un equipo por línea y te mostraremos cómo quedaría la llave. Usamos la siguiente potencia de 2 y completamos huecos con BYE cuando es necesario.
                  </p>
                  <label className="mt-4 block text-sm font-semibold text-zinc-200" htmlFor="teams-input">
                    Lista de equipos
                  </label>
                  <textarea
                    id="teams-input"
                    value={teamsText}
                    onChange={(event) => setTeamsText(event.target.value)}
                    rows={10}
                    className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Equipo 1\nEquipo 2\nEquipo 3"
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setOrdering("original");
                        setShuffleSeed(null);
                      }}
                      className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
                        ordering === "original"
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-200"
                          : "border-white/15 text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      Mantener orden
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOrdering("random");
                        setShuffleSeed(Date.now());
                      }}
                      className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
                        ordering === "random"
                          ? "border-yellow-400 bg-yellow-400/20 text-yellow-200"
                          : "border-white/15 text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      Orden aleatorio
                    </button>
                    {ordering === "random" && (
                      <button
                        type="button"
                        onClick={() => setShuffleSeed(Date.now())}
                        className="rounded-lg border border-white/15 px-3 py-1 text-xs font-semibold text-zinc-300 hover:bg-white/5 transition"
                      >
                        Nuevo sorteo
                      </button>
                    )}
                  </div>
                  <p className="mt-3 text-xs text-zinc-400">
                    {teamCount === 0 && "Ingresa al menos dos equipos para ver el bracket."}
                    {teamCount === 1 && "Necesitas al menos dos equipos para generar enfrentamientos."}
                    {teamCount >= 2 && byes === 0 && `Bracket perfecto para ${teamCount} equipos.`}
                    {teamCount >= 2 && byes > 0 &&
                      `Bracket a ${bracketSize} equipos; se agregarán ${byes} BYE${byes === 1 ? "" : "s"}.`}
                  </p>
                  <ul className="mt-2 space-y-1 text-[11px] text-zinc-500">
                    <li>{`Equipos ingresados: ${totalInput}`}</li>
                    <li>{`Equipos únicos considerados: ${teamCount}`}</li>
                    {teamCount >= 2 && (
                      <li>{`Enfrentamientos totales: ${totalMatches}`}</li>
                    )}
                    {duplicates.length > 0 && (
                      <li className="text-amber-300">
                        {`Se omitieron ${duplicates.length} duplicado${duplicates.length === 1 ? "" : "s"} (${duplicates.join(", ")}).`}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <h4 className="text-sm font-semibold text-zinc-200">Vista previa</h4>
                  <div className="mt-3">
                    {hasPreview && teamCount >= 2 ? (
                      <BracketDisplay rounds={previewRounds} />
                    ) : (
                      <p className="text-xs text-zinc-400">
                        Agrega al menos dos equipos para generar la llave.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function shuffleWithSeed(items, seed) {
  const list = [...items];
  const normalizedSeed = Number.isFinite(seed) ? seed : Date.now();
  const rng = mulberry32(normalizedSeed >>> 0);
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
