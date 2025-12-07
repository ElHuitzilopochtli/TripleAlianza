import React from "react";
import Mlbb from "../img/mlbb.png";
import Triple from "../img/triple.png";

export default function QuienesSomos() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-20">
        <header className="mb-10 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-2">
            Triple Alianza Esports
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            ¿Quiénes somos?
          </h1>
          <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-2xl">
            Un proyecto independiente que busca dar formato serio, ordenado y
            cercano a la comunidad competitiva de Mobile Legends: Bang Bang en
            México y LATAM.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Visión</h2>
            <p className="text-sm text-zinc-300">
              Crear un ecosistema donde los jugadores puedan competir de forma
              constante, conocer nuevos equipos y tener un espacio que se sienta
              profesional sin perder el toque cercano de comunidad.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Misión</h2>
            <p className="text-sm text-zinc-300">
              Diseñar torneos claros, justos y entretenidos; ofrecer una buena
              experiencia a jugadores, staff y espectadores; y aportar al
              crecimiento de la escena de MLBB en México y la región.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 mb-10">
          <h2 className="text-lg font-semibold mb-3">Lo que nos define</h2>
          <ul className="text-sm text-zinc-300 space-y-2">
            <li>• Formatos claros y comunicación directa con los equipos.</li>
            <li>• Respeto por el tiempo de jugadores y staff.</li>
            <li>• Enfoque en México con apertura a LATAM cuando el formato lo permita.</li>
            <li>• Estilo visual inspirado en la cultura mexica y en ligas oficiales.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 mb-10">
          <h2 className="text-lg font-semibold mb-3">Marcas involucradas</h2>
          <p className="text-sm text-zinc-300 mb-4">
            Triple Alianza Esports nace como iniciativa de comunidad, alineada
            con el ecosistema oficial de Mobile Legends: Bang Bang cuando es
            posible y respetando siempre las reglas de MLBB Esports.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <img
              src={Triple}
              alt="Triple Alianza Esports"
              className="h-12 object-contain"
            />
            <img
              src={Mlbb}
              alt="MLBB Esports"
              className="h-12 object-contain"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-cyan-500/10 p-5 md:p-6">
          <h2 className="text-lg font-semibold mb-2">
            Más que torneos, una comunidad
          </h2>
          <p className="text-sm text-zinc-100 mb-3">
            Nuestro objetivo es que, cada vez que entres a un torneo o al
            servidor de Discord, sientas que hay una escena viva, organizada y
            con futuro.
          </p>
          <p className="text-xs md:text-sm text-zinc-300">
            Si quieres colaborar como caster, creador de contenido, staff o
            patrocinador, no dudes en escribirnos en la sección de contacto o
            directamente por Discord.
          </p>
        </section>
      </div>
    </main>
  );
}
