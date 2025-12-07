// src/pages/TorneoDelSolResumen.jsx
import React from "react";
// arriba del archivo (TorneoDelSol.jsx o el que estés usando)
import TeonenemiLogo from "../img/teams/Tecuani.webp";
import SunsetRavensLogo from "../img/teams/SunsetRavens.webp";
import TheFoxesTeamLogo from "../img/teams/TheFoxesTeam.webp";
import AbyssVipersLogo from "../img/teams/Abyss.webp";

// 👇 Cambia estas rutas por las imágenes de héroes que quieras
import HeroPicksImg from "../img/Akai.png";
import HeroBansImg from "../img/yss.png";
import HeroContImg from "../img/Lancelot.png";
import Mlbb from "../img/mlbb.png";
import Triple from "../img/triple.png";

import Gold from  "../img/teams/Gold.png";
import Exp from  "../img/teams/Exp.png";
import Jungler from  "../img/teams/Jungler.png";
import Roaming from  "../img/teams/Roaming.png";
import Mid from  "../img/teams/Mid.png";
// (opcional) Logos de sponsors en la sección final.
// Puedes poner estos archivos en /public/img/sponsors/ y dejar las rutas así,
// o cambiarlas por las que tú uses.
const SPONSOR_LOGOS = [
  { name: "Triple Alianza Esports",
    src: Triple,
  },
  {
    name: "MLBB Esports",
    src: Mlbb,
   
  },
];

const torneo = {
  nombre: "Torneo del Sol — Apertura",
  fechas: "29 y 30 de noviembre de 2024",
  lugar: "Online · Mobile Legends: Bang Bang",

  // total de partidas jugadas en TODO el torneo
  totalPartidas: 6,

  ganador: {
    nombre: "Sunset Ravens",
    logo: SunsetRavensLogo,
    descripcion:
      "Sunset Ravens se coronó campeón del Torneo del Sol, dominando el bracket con macro limpio y una defensa casi perfecta.",
    // 👇 Roster campeón. Puedes añadir rol e icono de rol más adelante.
    roster: [
      { nick: "Αʀᴄᴛɪᴄ久", rol: "", roleIcon: Roaming },
      { nick: "℘ᴋʏᴏᴋᴏ", rol: "", roleIcon: Jungler },
      { nick: "ɪ’ᴍ ʟɪᴀ.", rol: "", roleIcon: Mid},
      { nick: "Berserket", rol: "", roleIcon: Exp},
      { nick: "Mr. Possesive", rol: "", roleIcon: Gold },
    ],
  },

  participantes: [
    {
      id: "TE01",
      nombre: "Teonenemi Esports",
      logo: TeonenemiLogo,
    },
    {
      id: "SR01",
      nombre: "Sunset Ravens",
      logo: SunsetRavensLogo,
    },
    {
      id: "TF01",
      nombre: "The Foxes Team",
      logo: TheFoxesTeamLogo,
    },
    {
      id: "AV01",
      nombre: "Abyss Vipers",
      logo: AbyssVipersLogo,
    },
  ],

  bracket: {
    semifinales: [
      {
        id: "SF1",
        titulo: "Semifinal 1 (Bo3)",
        equipoA: "Teonenemi Esports",
        equipoB: "The Foxes Team",
        scoreA: 2,
        scoreB: 0,
      },
      {
        id: "SF2",
        titulo: "Semifinal 2 (Bo3)",
        equipoA: "Sunset Ravens",
        equipoB: "Abyss Vipers",
        scoreA: 2,
        scoreB: 0,
      },
    ],
    final: {
      id: "F1",
      titulo: "Gran Final (Bo3)",
      equipoA: "Teonenemi Esports",
      equipoB: "Sunset Ravens",
      scoreA: 1,
      scoreB: 2,
    },
  },

  heroes: {
    // 👇 imágenes de héroe para cada tarjeta de estadísticas
    cardHeroPicks: HeroPicksImg,
    cardHeroBans: HeroBansImg,
    cardHeroContencion: HeroContImg,

    topPicks: [
      { nombre: "Akai", picks: 4, wins: 3, bans: 1 },
      { nombre: "Lancelot", picks: 4, wins: 3, bans: 1 },
      { nombre: "Xborg", picks: 3, wins: 2, bans: 0 },
    ],
    topBans: [
      { nombre: "Yin-Sun-Sim", bans: 6 },
      { nombre: "Hayabusa", bans: 5 },
      { nombre: "Grock", bans: 4 },
    ],
    topContencion: [
      { nombre: "Lancelot", contencion: 6 }, // picks + bans
      { nombre: "Hayabusa", contencion: 6 },
      { nombre: "Yin-Sun-Sin", contencion: 6 },
    ],
  },

  videos: [
    {
      titulo: "Semifinales del Torneo del Sol",
      plataforma: "Twitch",
      url: "https://www.twitch.tv/videos/2631384210",
    },
    {
      titulo:
        "Semifinal BO3 🔥 The Foxes Team vs Teonenemi | Triple Alianza Esports",
      plataforma: "YouTube",
      url: "https://www.youtube.com/watch?v=S1HuPYP233k",
    },
    {
      titulo:
        "Semifinal BO3 🔥 Sunset Ravens vs Abyss Vipers | Triple Alianza Esports",
      plataforma: "YouTube",
      url: "https://www.youtube.com/watch?v=kVl9Sfutq_4",
    },
  ],
};

export default function TorneoDelSol() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      {/* CABECERA */}
     <header className=" border-white/10 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent">
  <div className="mx-auto max-w-6xl px-4 py-8 md:py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
    {/* IZQUIERDA: título + ficha rápida */}
    <div className="md:max-w-2xl">
      <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-2">
        Triple Alianza Esports
      </p>
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        {torneo.nombre}
      </h1>
      <p className="mt-2 text-sm md:text-base text-zinc-300">
        {torneo.fechas} · {torneo.lugar}
      </p>

      {/* FICHA RÁPIDA DEL TORNEO */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300 border border-yellow-500/40">
          🏆 Premio total: $2,500 MXN
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-100 border border-white/10">
          🎮 Modo: 5v5 Clasificatoria
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-100 border border-white/10">
          👥 Equipos: 4
        </span>
      </div>

      <p className="mt-3 text-sm text-zinc-400 max-w-2xl">
        Resumen oficial de la primera edición del Torneo del Sol. Aquí queda
        documentado todo: campeón, participantes, bracket final, estadísticas
        de héroes y contenido en video.
      </p>
    </div>

    {/* DERECHA: PATROCINADO POR */}
       {/* DERECHA / CENTRO: PATROCINADO POR */}
    <div className="flex flex-col items-center md:items-end gap-2 mt-4 md:mt-0 self-center md:self-auto">
      <span className="text-[26px] md:text-[30px] uppercase tracking-[0.25em] text-zinc-500 text-center md:text-right">
        Patrocinado por
      </span>
      <div className="flex items-center justify-center md:justify-end gap-4">
        {SPONSOR_LOGOS.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-12 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]"
          />
        ))}
      </div>
    </div>

  </div>
</header>


      <div className="mx-auto max-w-6xl px-4 pb-16">
        {/* GANADOR */}
        <section className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-500/20 via-amber-500/5 to-cyan-400/10 border border-yellow-500/40 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-2">
            Campeón del torneo
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={torneo.ganador.logo}
              alt={torneo.ganador.nombre}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/60 object-contain border-2 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,.5)]"
            />
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300">
                {torneo.ganador.nombre}
              </h2>
              <p className="mt-2 text-zinc-100 text-sm md:text-base">
                {torneo.ganador.descripcion}
              </p>

              {/* Roster campeón */}
              {torneo.ganador.roster && (
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-yellow-300 mb-2">
                    Roster campeón
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                    {torneo.ganador.roster.map((player) => (
                      <div
                        key={player.nick}
                        className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1.5 border border-white/5"
                      >
                        {player.roleIcon && (
                          <img
                            src={player.roleIcon}
                            alt={player.rol || "Rol"}
                            className="w-8 h-8 object-contain"
                          />
                        )}
                        <div className="flex flex-col leading-tight">
                          <span className="font-semibold text-zinc-50">
                            {player.nick}
                          </span>
                          {player.rol && (
                            <span className="text-[10px] uppercase tracking-wide text-zinc-400">
                              {player.rol}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PARTICIPANTES */}
        <section className="mt-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Equipos participantes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {torneo.participantes.map((team) => (
              <div
                key={team.id}
                className="group rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex flex-col items-center text-center transition-transform duration-200 hover:border-yellow-400/70 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="relative flex items-center justify-center mb-2">
                  {/* Glow detrás del logo */}
                  <div className="absolute inset-0 rounded-full bg-yellow-500/25 blur-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200" />
                  <img
                    src={team.logo}
                    alt={team.nombre}
                    className="relative w-16 h-16 object-contain transition-transform duration-200 group-hover:scale-125 group-active:scale-125"
                  />
                </div>
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  {team.id}
                </p>
                <p className="text-sm font-semibold mt-1">{team.nombre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BRACKET */}
        <section className="mt-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Bracket final del torneo
          </h3>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <div className="space-y-4">
              {torneo.bracket.semifinales.map((m) => (
                <MatchCard key={m.id} match={m} />
              ))}
            </div>

            <div className="hidden md:flex flex-col items-center text-zinc-500 text-sm">
              <span className="mb-2">Ganadores →</span>
              <span className="text-xs uppercase tracking-wide text-zinc-400">
                Final
              </span>
            </div>

            <div>
              <MatchCard match={torneo.bracket.final} highlight />
            </div>
          </div>
        </section>

      
        {/* ESTADÍSTICAS DE HÉROES */}
        <section className="mt-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Estadísticas de héroes
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            Datos basados en todas las partidas del torneo. Sirve para ver qué
            se respetó, qué se negó y qué héroes dominaron el meta del Torneo
            del Sol.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <HeroList
              title="Más pickeados"
              items={torneo.heroes.topPicks}
              type="picks"
              totalGames={torneo.totalPartidas}
              heroImage={torneo.heroes.cardHeroPicks}
              heroAlt="Héroe más pickeado"
            />
            <HeroList
              title="Más baneados"
              items={torneo.heroes.topBans}
              type="bans"
              totalGames={torneo.totalPartidas}
              heroImage={torneo.heroes.cardHeroBans}
              heroAlt="Héroe más baneado"
            />
            <HeroList
              title="Mayor contención"
              items={torneo.heroes.topContencion}
              type="contencion"
              totalGames={torneo.totalPartidas}
              heroImage={torneo.heroes.cardHeroContencion}
              heroAlt="Héroe con mayor contención"
            />
          </div>
        </section>

        {/* VIDEOS / STREAMS */}
        <section className="mt-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Streams y VODs del torneo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {torneo.videos.map((v) => {
              const isYouTube =
                v.plataforma === "YouTube" && v.url.includes("watch?v=");
              const twitchEmbed =
                v.plataforma === "Twitch" ? getTwitchEmbedUrl(v.url) : null;

              return (
                <div
                  key={v.url}
                  className="rounded-xl overflow-hidden bg-black/60 border border-white/10 flex flex-col"
                >
                  <div className="aspect-video bg-black/70 flex items-center justify-center">
                    {isYouTube ? (
                      <iframe
                        title={v.titulo}
                        src={v.url.replace("watch?v=", "embed/")}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    ) : twitchEmbed ? (
                      <iframe
                        title={v.titulo}
                        src={twitchEmbed}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    ) : (
                      <div className="p-4 text-center">
                        <p className="text-sm mb-3">{v.titulo}</p>
                        <a
                          href={v.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs rounded-full bg-purple-500/80 px-4 py-1.5 font-semibold hover:bg-purple-400 transition"
                        >
                          Ver en {v.plataforma}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-3 border-t border-white/5 text-xs text-zinc-400">
                    {v.titulo}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold">
            Próximos torneos de Triple Alianza
          </h3>

          {/* Subtítulo */}
          <p className="mt-1 text-sm text-yellow-300">
            Flash Cups · Liga Mexicana · Showmatches especiales
          </p>

          <p className="mt-3 text-sm text-zinc-300 max-w-2xl">
            El Torneo del Sol fue solo el inicio. Estamos preparando más
            competencias para la comunidad de Mobile Legends: Bang Bang en
            México.
          </p>

          {/* Bullets */}
          <ul className="mt-3 text-sm text-zinc-300 space-y-1">
            <li>• Ligas tipo Apertura/Clausura</li>
            <li>• Torneos rápidos (Flash Cups)</li>
            <li>• Clasificatorios para futuros proyectos</li>
          </ul>

          {/* Botones */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://discord.gg/9ttJUed5rR"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-5 py-2 text-sm font-semibold"
            >
              Unirme al Discord
            </a>
            <a
              href="/competencias"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm hover:bg-white/5"
            >
              Ver próximas competencias
            </a>
            <a
              href="https://wa.me/14699619772?text=Hola,%20vengo%20desde%20la%20página%20del%20Torneo%20del%20Sol.%20Me%20interesa%20ser%20caster/host%20para%20los%20próximos%20eventos%20de%20Triple%20Alianza%20Esports.%20¿Me%20puedes%20compartir%20más%20información,%20por%20favor?
"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-yellow-400/60 text-yellow-300 px-5 py-2 text-sm hover:bg-yellow-400/10"
            >
              Quiero ser caster/host
            </a>
          </div>

          {/* Sponsors */}
         <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
  <span className="uppercase tracking-[0.25em] text-[11px] md:text-xs text-zinc-400">
    Patrocinado por
  </span>

  <div className="flex flex-wrap items-center gap-6">
    {SPONSOR_LOGOS.map((logo) => (
      <img
        key={logo.name}
        src={logo.src}
        alt={logo.name}
        className="h-10 md:h-12 object-contain opacity-90"
      />
    ))}
  </div>
</div>
        </section>
      </div>
    </main>
  );
}

/* --------- Componentes auxiliares --------- */

function MatchCard({ match, highlight = false }) {
  const winnerA = match.scoreA > match.scoreB;
  const winnerB = match.scoreB > match.scoreA;

  return (
    <div
      className={`rounded-xl border px-4 py-3 text-sm bg-black/40 ${
        highlight
          ? "border-yellow-400/70 shadow-[0_0_25px_rgba(250,204,21,.35)]"
          : "border-white/10"
      }`}
    >
      <p className="text-[11px] uppercase tracking-wide text-zinc-400 mb-1">
        {match.titulo}
      </p>
      <div className="flex items-center justify-between gap-3">
        <span className={winnerA ? "font-semibold text-yellow-300" : ""}>
          {match.equipoA}
        </span>
        <span className="font-mono text-xs text-zinc-300">
          {match.scoreA} - {match.scoreB}
        </span>
        <span className={winnerB ? "font-semibold text-yellow-300" : ""}>
          {match.equipoB}
        </span>
      </div>
    </div>
  );
}

function HeroList({ title, items, type, totalGames, heroImage, heroAlt }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-8 min-h-[300px] relative overflow-hidden">

      {/* Contenido de texto (top 3) */}
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3">
          {title}
        </p>
        <ul className="space-y-1">
          {items.map((h, i) => {
            let rightText = "";

            if (type === "picks") {
              const winrate =
                h.picks && h.wins ? Math.round((h.wins / h.picks) * 100) : 0;
              const pickRate =
                totalGames && h.picks
                  ? Math.round((h.picks / totalGames) * 100)
                  : 0;
              rightText = `${h.picks} picks · ${winrate}% WR · ${pickRate}% pick`;
            }

            if (type === "bans") {
              const banRate =
                totalGames && h.bans
                  ? Math.round((h.bans / totalGames) * 100)
                  : 0;
              rightText = `${h.bans} bans · ${banRate}% ban`;
            }

            if (type === "contencion") {
              const rate =
                totalGames && h.contencion
                  ? Math.round((h.contencion / totalGames) * 100)
                  : 0;
              rightText = `${h.contencion} apariciones · ${rate}% meta`;
            }

            return (
              <li key={h.nombre} className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-5 text-xs text-zinc-500">#{i + 1}</span>
                  <span>{h.nombre}</span>
                </span>
                <span className="font-mono text-xs text-zinc-300">
                  {rightText}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Héroe centrado abajo con brillo */}
      {heroImage && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <div className="relative translate-y-4">
            <div className="absolute -inset-10 bg-yellow-400/25 rounded-full blur-3xl" />
            <img
              src={heroImage}
              alt={heroAlt || title}
              className="relative w-48 md:w-56 drop-shadow-[0_0_35px_rgba(250,204,21,.85)]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
/**
 * Convierte una URL de Twitch (canal o VOD) en una URL embebible.
 * Usa el hostname actual como `parent`, para que funcione en localhost y en producción.
 */
function getTwitchEmbedUrl(url) {
  try {
    const clean = url.split("?")[0];
    const parts = clean.split("/");
    const idx = parts.findIndex((p) => p.includes("twitch.tv"));
    const rest = parts.slice(idx + 1).filter(Boolean);
    if (!rest.length) return null;

    const parent =
      typeof window !== "undefined"
        ? encodeURIComponent(window.location.hostname)
        : "triple-alianza.vercel.app";

    // https://www.twitch.tv/videos/123456789
    if (rest[0] === "videos" && rest[1]) {
      return `https://player.twitch.tv/?video=${rest[1]}&parent=${parent}&autoplay=false&muted=false`;
    }

    // https://www.twitch.tv/triplealianzaesports
    const channel = rest[0];
    return `https://player.twitch.tv/?channel=${channel}&parent=${parent}&autoplay=false&muted=false`;
  } catch {
    return null;
  }
}
