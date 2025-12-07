import React from "react";

const FAQ_ITEMS = [
  {
    q: "¿Cómo me registro a un torneo?",
    a: "Todo el registro se realiza dentro del servidor de Discord de Triple Alianza. En cada anuncio de torneo encontrarás el canal de inscripciones y la plantilla que debes completar con los datos de tu equipo.",
  },
  {
    q: "¿Tiene costo participar?",
    a: "Los torneosde Triple Alianza no tienen costo de inscripción. Son completamente libres y gratuitos.",
  },
  {
    q: "¿Qué requisitos debe cumplir mi equipo?",
    a: "Necesitas un mínimo de 5 jugadores titulares (y opcionalmente suplentes), todos con cuenta válida de Mobile Legends: Bang Bang, disponibilidad en las fechas indicadas y respeto al reglamento de Triple Alianza y de MLBB Esports.",
  },
  {
    q: "¿Puedo jugar si no soy de México?",
    a: "El enfoque principal es México pero sin intenciones de dejar fuera a LATAM y NA, a pesar de ser una competencia Mexicana en los torneos se permitiran equipos de otros países siempre que el servidor y el ping lo permitan."
  },
  {
    q: "¿Cómo se entregan los premios?",
    a: "Los premios en efectivo se entregan mediante transferencia electronica a jugadores Mexicanos, de no ser mexicano el pago se podra concretar unicamente por Paypal y los diamantes mediante el sistema de regalo dentro del juego. Los detalles siempre se confirman por mensaje privado al capitán.",
  },
  {
    q: "¿Transmiten las partidas?",
    a: "Actualmentente los encuentros no se castean y solo se transmiten en los canales oficiales de Triple Alianza. En el anuncio o en Discord se indicará qué series serán transmitidas y cuál es el canal oficial del torneo.",
  },
  {
    q: "¿Puedo cambiar jugadores después de inscribirme?",
    a: "Los cambios de roster se permiten únicamente hasta la fecha límite indicada en el reglamento de cada torneo. Después de esa fecha, el roster queda bloqueado salvo casos especiales aprobados por la administración.",
  },
];

export default function PreguntasFrecuentes() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-20">
        <header className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-2">
            Triple Alianza Esports
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Preguntas frecuentes
          </h1>
          <p className="mt-3 text-sm md:text-base text-zinc-300">
            Respuestas rápidas sobre torneos, ligas y cómo participar en la
            comunidad.
          </p>
        </header>

        <section className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="text-sm md:text-base font-semibold text-yellow-200">
                  {item.q}
                </span>
                <span className="text-xs text-zinc-400 group-open:hidden">
                  Ver respuesta
                </span>
                <span className="text-xs text-zinc-400 hidden group-open:inline">
                  Ocultar
                </span>
              </summary>
              <p className="mt-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </section>

        <p className="mt-10 text-xs md:text-sm text-zinc-400 text-center">
          ¿Tienes una duda que no aparece aquí? Escríbenos por Discord en el
          canal de{" "}
          <span className="text-yellow-300 font-semibold">
            #soporte-torneos
          </span>{" "}
          o contáctanos por correo.
        </p>
      </div>
    </main>
  );
}
