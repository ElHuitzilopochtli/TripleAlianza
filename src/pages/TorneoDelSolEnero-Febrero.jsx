// src/pages/TorneoDelSolEnero.jsx
import React from "react";
import Mlbb from "../img/mlbb.png";
import Triple from "../img/triple.png";

const DISCORD_INVITE = "https://discord.gg/9ttJUed5rR";

const SPONSOR_LOGOS = [
  { name: "MLBB Esports", src: Triple },
  { name: "Triple Alianza Esports", src: Mlbb },
];

export default function TorneoDelSolEnero() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      {/* HERO SUPER LLAMATIVO */}
      {/* ✅ Línea amarilla fuera: quitamos el border-b */}
      <header className="bg-gradient-to-b from-yellow-500/25 via-transparent to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 grid gap-10 md:grid-cols-[minmax(0,1.7fr),minmax(0,1.1fr)] items-start">
          {/* LADO IZQUIERDO: TÍTULO + CHIPS + CTA */}
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-yellow-300 mb-2">
              Triple Alianza Esports · Torneo del Sol
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Torneo del Sol{" "}
            </h1>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-yellow-400">Enero-Febrero</span>
            </h1>

            <p className="mt-2 text-xs md:text-sm text-zinc-400 uppercase tracking-[0.22em]">
              Ciclo bimestral · Último fin de semana de enero + fines de semana de febrero
            </p>

            <p className="mt-3 text-sm md:text-base text-zinc-200">
              31 de enero al 28 de febrero de 2026 · Online · Mobile Legends: Bang Bang
            </p>

            {/* PASTILLAS DE INFO RÁPIDA */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/15 px-3 py-1 text-[11px] md:text-xs font-semibold text-yellow-300 border border-yellow-400/60">
                🏆 Premio total: $2,500 MXN
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] md:text-xs font-semibold text-zinc-100 border border-white/10">
                🎮 5v5 Clasificatoria
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] md:text-xs font-semibold text-zinc-100 border border-white/10">
                👥 Cupos: 8 / 12 / 16 equipos
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-[11px] md:text-xs font-semibold text-red-200 border border-red-500/50">
                ⚠️ Formato depende de registros
              </span>
            </div>

            <p className="mt-4 text-sm md:text-base text-zinc-300 max-w-xl">
              Esta edición marca el inicio del{" "}
              <span className="text-yellow-200 font-semibold">flujo bimestral</span>{" "}
              del Torneo del Sol. Un formato muy flexible que se adapta al número de equipos registrados
              para mantener partidas de alto nivel durante todo el ciclo Enero–Febrero.
            </p>

            {/* CTA PRINCIPAL */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
              >
                Unirme al Discord
              </a>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-yellow-400/60 text-yellow-200 px-6 py-2.5 text-sm font-semibold hover:bg-yellow-400/10 transition"
              >
                Registrar mi equipo
              </a>
            </div>

            {/* PATROCINIO ABAJO DEL HERO */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs text-zinc-500">
                Patrocinado por
              </span>
              <div className="flex items-center gap-4">
                {SPONSOR_LOGOS.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-10 object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.8)]"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: TARJETAS DESTACADAS */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-yellow-500/70 bg-gradient-to-br from-yellow-500/25 via-amber-500/10 to-cyan-500/20 px-5 py-4 shadow-[0_0_40px_rgba(250,204,21,.35)]">
              <p className="text-[11px] uppercase tracking-wide text-yellow-200">
                Ciclo del torneo
              </p>
              <p className="mt-2 text-2xl font-extrabold text-yellow-50">
                Enero – Febrero 2026
              </p>
              <p className="mt-1 text-xs text-yellow-100/90">
                Inicio: 31 de enero · Cierre: 28 de febrero
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-white/5 px-5 py-4">
              <p className="text-[11px] uppercase tracking-wide text-zinc-400">
                Prize pool oficial
              </p>
              <p className="mt-2 text-2xl font-extrabold text-zinc-50">
                $2,500 MXN
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Premios y detalles finales se publican dentro del Discord.
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-black/40 px-5 py-4">
              <p className="text-[11px] uppercase tracking-wide text-zinc-400">
                Cupos y formato adaptable
              </p>
              <p className="mt-2 text-sm text-zinc-200">
                El torneo se habilita con{" "}
                <span className="text-yellow-200 font-semibold">8, 12 o 16 equipos</span>{" "}
                según el registro válido en Discord.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL – CARDS, SIN BRACKET */}
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 space-y-8">
        {/* SOBRE EDICIÓN + FORMATO GENERAL */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg md:text-xl font-bold mb-3">
              Sobre esta edición bimestral
            </h2>
            <p className="text-sm text-zinc-300">
              El Torneo del Sol entra a un{" "}
              <span className="text-yellow-200 font-semibold">modelo bimestral</span>{" "}
              con un arranque fuerte en el último fin de semana de enero
              y desarrollo durante los fines de semana de febrero.
            </p>
            <p className="mt-3 text-sm text-zinc-300">
              El objetivo es mantener ritmo constante, organización clara y
              una experiencia sólida para equipos de la comunidad.
            </p>

            {/* ✅ Extra contenido para evitar vacío */}
            <p className="mt-3 text-sm text-zinc-300">
              Este formato busca que cada ciclo tenga una narrativa clara:
              equipos nuevos pueden entrar, equipos recurrentes pueden consolidarse
              y el staff puede ajustar el calendario para asegurar partidas
              ordenadas y de buen nivel.
            </p>

            <ul className="mt-4 text-sm text-zinc-300 space-y-1">
              <li>• Arranque fuerte el último fin de semana de enero.</li>
              <li>• Desarrollo cconstante durante febrero con continuidad.</li>
              <li>• Ajuste de cupos y estructura según registros válidos.</li>
              <li>• Enfoque en experiencia estable para la comunidad.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg md:text-xl font-bold mb-3">
              Formato según equipos registrados
            </h2>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="font-semibold text-zinc-100">
                  ✅ Si se registran 8 o 16 equipos
                </p>
                <ul className="mt-1 space-y-1">
                  <li>• Bracket tradicional de eliminación directa.</li>
                  <li>• Series Bo3 en todas las rondas.</li>
                  <li>• <span className="text-yellow-200 font-semibold">Gran final Bo5.</span></li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="font-semibold text-zinc-100">
                  ✅ Si se registran 12 equipos
                </p>
                <ul className="mt-1 space-y-1">
                  <li>• 4 grupos de 3 equipos.</li>
                  <li>• Fase de grupos <span className="text-yellow-200 font-semibold">Bo2</span>.</li>
                  <li>• Clasifican los 2 primeros de cada grupo.</li>
                  <li>• Cuartos de final <span className="text-yellow-200 font-semibold">Bo3</span>.</li>
                  <li>• <span className="text-yellow-200 font-semibold">Gran final Bo5.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* REQUISITOS + REGISTRO */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold mb-3">
              Requisitos de participación
            </h3>
            <ul className="text-sm text-zinc-300 space-y-1">
              <li>• 5 jugadores titulares + (opcional) suplentes.</li>
              <li>• Mayores de 16 años.</li>
              <li>• Disponibilidad en el ciclo del torneo.</li>
              <li>• Respetar reglamento de Triple Alianza y de MLBB Esports.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold mb-3">
              Registro de equipo (obligatorio en Discord)
            </h3>
            <p className="text-sm text-zinc-300">
              Para participar,{" "}
              <span className="text-yellow-200 font-semibold">debes registrar tu equipo en Discord</span>.
              Toda la coordinación, confirmación de cupos y horarios oficiales se maneja desde el servidor.
            </p>
            <ol className="mt-3 text-sm text-zinc-300 space-y-1 list-decimal list-inside">
              <li>Entra al Discord de Triple Alianza.</li>
              <li>Ve al canal de inscripciones del Torneo del Sol.</li>
              <li>Completa la plantilla/formulario del equipo.</li>
              <li>Espera confirmación del staff.</li>
            </ol>
          </div>
        </section>

        {/* CALL TO ACTION FINAL */}
        <section className="mt-4 rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-cyan-500/10 p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-yellow-300">
                Torneo del Sol · Ciclo bimestral
              </p>
              <p className="mt-2 text-sm md:text-base text-zinc-100 max-w-xl">
                Si quieres asegurar cupo, entra al Discord y registra tu equipo
                en cuanto se abran las inscripciones. El formato final se define
                según el número total de registros válidos.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
              >
                Ir al Discord de Triple Alianza
              </a>

              <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                <span className="uppercase tracking-[0.22em]">
                  Patrocinado por
                </span>
                <div className="flex items-center gap-3">
                  {SPONSOR_LOGOS.map((logo) => (
                    <img
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      className="h-10 object-contain opacity-95"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
