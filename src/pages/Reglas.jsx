import React from "react";

const DISCORD_INVITE = "https://discord.gg/9ttJUed5rR";

export default function Reglamentos() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-20 space-y-10">
        {/* HEADER */}
        <header className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-2">
            Triple Alianza Esports
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Reglamentos
          </h1>
          <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-2xl">
            Para que todo torneo sea justo y claro, seguimos el reglamento
            oficial de Mobile Legends: Bang Bang y añadimos reglas locales
            específicas de Triple Alianza.
          </p>
        </header>

        {/* REGLAMENTO OFICIAL MLBB */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">
            Reglamento oficial de MLBB Esports
          </h2>
          <p className="text-sm text-zinc-300">
            Triple Alianza Esports se alinea al reglamento oficial de{" "}
            <span className="text-yellow-200 font-semibold">
              Mobile Legends: Bang Bang Esports
            </span>
            . Este documento establece las bases generales de conducta,
            elegibilidad, integridad competitiva y sanciones.
          </p>

          <ul className="text-sm text-zinc-300 space-y-2">
            <li>
              • Uso de cuentas oficiales y no prestadas, sin modificación
              ilegal del cliente.
            </li>
            <li>
              • Prohibición absoluta de hacks, scripts, programas de terceros
              o cualquier ventaja injusta.
            </li>
            <li>
              • Reglas sobre lenguaje y conducta profesional: cero tolerancia
              al acoso, insultos graves o discriminación.
            </li>
            <li>
              • Normas generales de pausas, desconexiones y reinicios de partida.
            </li>
          </ul>

          <p className="text-xs md:text-sm text-zinc-400">
            El reglamento oficial completo puede consultarse en los canales
            oficiales de{" "}
            <span className="text-yellow-300 font-semibold">
              MLBB Esports
            </span>{" "}
            (sitio web y anuncios regionales). En caso de conflicto de
            interpretación, el reglamento oficial prevalece sobre cualquier
            ajuste local.
          </p>
        </section>

        {/* REGLAMENTO LOCAL TRIPLE ALIANZA */}
        <section className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/15 via-amber-500/10 to-cyan-500/10 p-5 md:p-6 space-y-6">
          <h2 className="text-lg md:text-xl font-semibold">
            Reglamento Local · Triple Alianza Esports
          </h2>

          {/* 1. Introducción */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              1. Introducción
            </h3>
            <p className="text-sm text-zinc-100">
              Este reglamento establece las normas generales de participación,
              conducta e integridad competitiva en los torneos, copas y eventos
              organizados por <span className="font-semibold">Triple Alianza Esports</span>.
            </p>
            <p className="text-sm text-zinc-100">
              Aplica a torneos flash (Torneo del Sol y similares), ligas o
              temporadas, showmatches y eventos especiales, así como a sus
              transmisiones y contenidos relacionados.
            </p>
          </div>

          {/* 1.1 Alcance y aceptación */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              1.1 Alcance y aceptación
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • Cuando un torneo esté alineado o avalado por MLBB Esports, sus
                reglas oficiales tienen prioridad en aspectos técnicos y de
                integridad del juego.
              </li>
              <li>
                • Este reglamento local complementa esas normas con reglas para
                horarios, puntualidad, conducta en Discord, reportes y sanciones.
              </li>
              <li>
                • Al inscribir un equipo, el capitán confirma que todos han leído
                y aceptan este reglamento.
              </li>
              <li>
                • La ignorancia de las reglas no exime de responsabilidad.
              </li>
            </ul>
          </div>

          {/* 1.2 Uso de imagen y cambios */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              1.2 Uso de imagen y cambios en el reglamento
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • Al participar, equipos y jugadores autorizan el uso de nombres,
                logos y clips de sus partidas en transmisiones y redes de Triple
                Alianza.
              </li>
              <li>
                • Triple Alianza puede actualizar este reglamento cuando sea
                necesario; los cambios se anunciarán en Discord.
              </li>
            </ul>
          </div>

          {/* 2. Definiciones básicas */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              2. Definiciones básicas
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>• <span className="font-semibold">Partida:</span> un juego individual dentro de MLBB.</li>
              <li>• <span className="font-semibold">Encuentro / Serie:</span> conjunto de partidas (Bo1, Bo3, Bo5) entre dos equipos.</li>
              <li>• <span className="font-semibold">Forfeit / Default:</span> derrota automática por no presentarse o infringir gravemente las reglas.</li>
              <li>• <span className="font-semibold">Staff:</span> administradores, árbitros y organizadores de Triple Alianza.</li>
              <li>• <span className="font-semibold">Capitán:</span> jugador responsable de la comunicación con el staff.</li>
            </ul>
          </div>

          {/* 3. Código de conducta */}
          <div className="space-y-3">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              3. Código de conducta
            </h3>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-50">
                3.1 Juego limpio
              </p>
              <ul className="text-sm text-zinc-100 space-y-1">
                <li>• Prohibido el uso de hacks o programas de terceros.</li>
                <li>• Prohibido el smurfing y jugar con la cuenta de otra persona.</li>
                <li>• Prohibido aprovechar bugs del juego de forma intencional.</li>
                <li>• Prohibido arreglar resultados o perder a propósito.</li>
              </ul>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-50">
                3.2 Conducta en Discord, partidas y redes
              </p>
              <ul className="text-sm text-zinc-100 space-y-1">
                <li>• No se permiten insultos directos, acoso o amenazas.</li>
                <li>• Prohibidos comentarios discriminatorios (raza, género, religión, etc.).</li>
                <li>• El “banter” competitivo es válido mientras no cruce la línea del respeto.</li>
              </ul>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-50">
                3.3 No denigración
              </p>
              <ul className="text-sm text-zinc-100 space-y-1">
                <li>
                  • Críticas, dudas o quejas se tratan por privado con el staff,
                  no en forma de campaña de hate pública.
                </li>
                <li>
                  • Ataques graves a la imagen del torneo o la comunidad pueden
                  derivar en veto de futuras ediciones.
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Participación y elegibilidad */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              4. Participación y elegibilidad
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>• Edad mínima recomendada: 16 años.</li>
              <li>• Cada jugador sólo puede estar en un equipo por torneo.</li>
              <li>• Se debe usar la cuenta real de MLBB, sin compartir.</li>
              <li>
                • El alcance regional (México, LATAM, etc.) se indicará en el
                anuncio de cada edición.
              </li>
            </ul>
          </div>

          {/* 5. Equipos, nombres y logos */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              5. Equipos, nombres y logos
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>• Cada equipo debe tener 5 jugadores titulares.</li>
              <li>• Puede haber suplentes según lo permita el anuncio.</li>
              <li>
                • No se permiten nombres o logos con insultos, racismo o
                contenido explícito.
              </li>
              <li>
                • Cambios de nombre o logo después del registro requieren
                aprobación del staff.
              </li>
            </ul>
          </div>

          {/* 6. Horarios, puntualidad y W.O. */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              6. Horarios, puntualidad y W.O.
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • El calendario oficial se publica en el Discord del torneo.
              </li>
              <li>
                • Los equipos deben estar listos en Discord y en el juego al
                menos 10 minutos antes de la hora marcada.
              </li>
              <li>
                • Retrasos sin justificación pueden convertirse en derrota por
                default de la partida o de la serie.
              </li>
              <li>
                • La reincidencia en impuntualidad puede llevar a descalificación
                y/o veto en futuras ediciones.
              </li>
            </ul>
          </div>

          {/* 7. Proceso de encuentro */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              7. Proceso de encuentro
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>• El staff confirma horario y rival por Discord.</li>
              <li>• Se crea el lobby oficial siguiendo las indicaciones del staff.</li>
              <li>• Se juega con las configuraciones indicadas en el anuncio.</li>
              <li>
                • Al terminar, el capitán reporta el resultado con captura en el
                canal correspondiente.
              </li>
            </ul>
          </div>

          {/* 8. Pausas */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              8. Pausas
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • Cada equipo tendrá un número limitado de pausas (por ejemplo,
                1 por partida hasta 5 minutos; se especificará por torneo).
              </li>
              <li>
                • Motivos válidos: lag fuerte, desconexión real, problemas
                técnicos graves.
              </li>
              <li>
                • La petición debe hacerse con claridad (ej. “pausa” o “p”) por
                los canales indicados.
              </li>
              <li>
                • El staff puede negar o cortar pausas si considera que se
                abusa de ellas.
              </li>
            </ul>
          </div>

          {/* 9. Integridad competitiva */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              9. Integridad competitiva
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • El staff puede solicitar capturas, POV o verificación de
                identidad cuando lo considere necesario.
              </li>
              <li>
                • Negarse a cooperar en verificaciones razonables puede implicar
                descalificación.
              </li>
            </ul>
          </div>

          {/* 10. Sanciones */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              10. Sanciones
            </h3>
            <p className="text-sm text-zinc-100">
              Según la gravedad de la falta, las sanciones pueden incluir:
            </p>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>• Advertencias verbales o escritas.</li>
              <li>• Pérdida de mapa o serie.</li>
              <li>• Expulsión del torneo actual.</li>
              <li>• Pérdida parcial o total de premios.</li>
              <li>• Veto temporal o permanente en futuros torneos.</li>
            </ul>
          </div>

          {/* 11. Premios */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              11. Premios
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • Los premios (efectivo, diamantes u otros) se entregan en los
                plazos y medios anunciados para cada torneo.
              </li>
              <li>
                • Para premios en moneda virtual, el capitán debe entregar datos
                correctos y completos de los jugadores en el tiempo indicado.
              </li>
              <li>
                • Si un equipo no completa el torneo sin causa justificada, se
                puede retener total o parcialmente su premio.
              </li>
            </ul>
          </div>

          {/* 12. Disposiciones finales */}
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-semibold text-yellow-200">
              12. Disposiciones finales
            </h3>
            <ul className="text-sm text-zinc-100 space-y-1">
              <li>
                • En situaciones no contempladas explícitamente, la decisión
                final corresponde al staff de Triple Alianza Esports.
              </li>
              <li>
                • Al inscribirse y participar, equipos y jugadores aceptan estas
                reglas y se comprometen a respetar tanto al staff como a la
                comunidad.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA DISCORD */}
        <section className="text-center mt-4">
          <p className="text-xs md:text-sm text-zinc-300 mb-3">
            Si tienes dudas sobre cómo se aplican estas reglas en un torneo
            específico, pregunta en nuestro servidor de Discord.
          </p>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-emerald-500/90 hover:bg-emerald-400 px-6 py-2.5 text-sm font-semibold"
          >
            Ir al Discord de Triple Alianza
          </a>
        </section>
      </div>
    </main>
  );
}
