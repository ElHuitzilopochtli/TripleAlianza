import React from "react";
import hayabusa from "../img/hayabusa.png";
import chou from "../img/chou.png";

export default function Home() {
  const discordInvite = "https://discord.gg/9ttJUed5rR";

  return (
    <main className="min-h-screen bg-[#050509] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* halo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_40%_10%,rgba(255,215,0,0.18),transparent_60%)]" />

        {/* Hayabusa de FONDO en móvil (más visible) */}
        <div className="pointer-events-none absolute inset-0 md:hidden opacity-70">
          <img
            src={hayabusa}
            alt=""
            className="w-full h-full object-contain scale-[1.35] -translate-y-4"
          />
          {/* degradado más suave para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/70 via-[#050509]/40 to-[#050509]/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
          {/* GRID: texto izquierda / arte derecha */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                <span className="text-yellow-400">Triple Alianza Esports</span>
                <br />
                <span className="text-white">Comunidad y Competencia</span>
              </h1>
              <p className="mt-4 text-zinc-300 max-w-prose mx-auto md:mx-0 text-sm sm:text-base">
                La casa del competitivo con esencia mexica: unión, estrategia y
                fuerza. Organizamos ligas, copas y eventos para Mobile Legends:
                Bang Bang, impulsando talento de LATAM.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                <a
                  href={discordInvite}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-yellow-400 text-black font-bold px-6 py-3 text-sm sm:text-base hover:bg-yellow-300 transition"
                >
                  Unirme al Discord
                </a>
                <a
                  href="/competencias"
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm sm:text-base hover:bg-white/5 transition"
                >
                  Ver Competencias
                </a>
              </div>
            </div>

            {/* Hayabusa LADO DERECHO en md+ */}
            <div className="order-1 md:order-2 relative hidden md:block">
              {/* brillos */}
              <div className="absolute -z-10 right-0 top-6 h-72 w-72 bg-yellow-400/20 blur-3xl rounded-full" />
              <div className="absolute -z-10 right-10 top-10 h-[500px] w-[500px] bg-yellow-500/20 blur-[120px] rounded-full" />

              <img
                src={hayabusa}
                alt="Héroe MLBB en movimiento"
                className="w-full max-h-[420px] ml-auto object-contain select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PILARES + CHOU */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative">
          {/* Chou de FONDO en móvil (más visible y centrado) */}
          <div className="pointer-events-none absolute inset-0 md:hidden opacity-60">
            <img
              src={chou}
              alt=""
              className="mx-auto w-[85%] max-w-[420px] object-contain scale-110 -translate-y-6"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/60 via-[#050509]/30 to-[#050509]/60" />
          </div>

          {/* Chou grande a la IZQUIERDA en md+ */}
          <img
            src={chou}
            alt="Personaje MLBB"
            className="
              hidden md:block
              absolute left-0 -top-24
              w-[420px] lg:w-[500px]
              pointer-events-none select-none
            "
          />

          {/* contenido desplazado a la derecha en escritorio */}
          <div className="relative md:pl-[22rem]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center md:text-left">
              Nuestros pilares
            </h2>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                [
                  "Unidad",
                  "La comunidad es primero: jugadores, espectadores y creadores.",
                ],
                [
                  "Estrategia",
                  "Eventos claros, reglas justas y producción seria.",
                ],
                ["Fuerza", "Competir con honor y crecer como escena."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-xl border border-white/10 p-5 bg-white/10 backdrop-blur-md"
                >
                  <p className="font-semibold text-yellow-300">{t}</p>
                  <p className="text-zinc-300 text-sm mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Únete al templo del Sol
            </h3>
            <p className="mt-3 text-zinc-300 text-sm sm:text-base">
              Entra a nuestro servidor de Discord: busca equipo, participa en
              scrims, comparte clips y entérate de los próximos torneos.
            </p>
            <a
              href={discordInvite}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-6 py-3 font-semibold text-sm sm:text-base"
            >
              Entrar al Discord
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 text-sm text-zinc-300">
            <p className="mb-2 font-semibold">Atajos</p>
            <ul className="space-y-2">
              <li>• Reglas de convivencia claras</li>
              <li>• Torneos y copas periódicas</li>
              <li>• Espacios para casters/creadores</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
