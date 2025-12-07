import React from "react";

const DISCORD_INVITE = "https://discord.gg/9ttJUed5rR";
const CONTACT_EMAIL = "elhuitzilopochtli@gmail.com";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-20">
        <header className="mb-10 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-2">
            Triple Alianza Esports
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">Contacto</h1>
          <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-2xl">
            Si tienes dudas sobre inscripciones, quieres colaborar como caster,
            creador o patrocinador, aquí tienes los canales oficiales para
            comunicarte.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-3">Servidor de Discord</h2>
            <p className="text-sm text-zinc-300">
              La forma más rápida de recibir respuesta. Dentro del servidor
              encontrarás canales de soporte para torneos, dudas generales y
              propuestas de colaboración.
            </p>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-6 py-2.5 text-sm font-semibold"
            >
              Entrar al Discord
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-3">Correo electrónico</h2>
            <p className="text-sm text-zinc-300">
              Para propuestas más formales (patrocinios, alianzas, prensa o
              consultas largas), puedes escribirnos por correo.
            </p>
            <p className="mt-3 text-sm text-yellow-200">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-3 text-xs text-zinc-400">
              Intenta incluir el nombre de tu equipo, región y una breve
              descripción del motivo de contacto para poder responderte mejor.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <h2 className="text-lg font-semibold mb-3">Horarios y tiempos de respuesta</h2>
          <ul className="text-sm text-zinc-300 space-y-2">
            <li>• La mayoría de respuestas se dan dentro de las 24–48 horas.</li>
            <li>• En días de torneo puede haber más tráfico; agradecemos tu paciencia.</li>
            <li>• Para emergencias de torneo, utiliza siempre el canal de soporte en Discord.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
