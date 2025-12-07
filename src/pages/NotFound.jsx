import React from "react";
import { Link } from "react-router-dom";
// Opcional: deja este import si vas a usar una imagen de héroe.
// Cambia la ruta o el nombre del archivo según tu proyecto.
import HeroImg from "../img/Akai.png";
export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#050509] text-white overflow-hidden">
      {/* Imagen GIGANTE de fondo a la IZQUIERDA */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={HeroImg}
          alt=""
          className="
            absolute
            left-[-18%]
            top-1/3
            -translate-y-1/2
            h-[140vh]          /* más alto que la pantalla */
            max-h-none
            object-contain
            drop-shadow-[0_40px_90px_rgba(0,0,0,0.9)]
            opacity-95
          "
        />
        {/* Degradado oscuro desde la izquierda para que el texto se lea bien */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050509] via-[#050509]/60 to-transparent" />
      </div>

      {/* Glow extra (opcional) */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 flex items-center min-h-screen">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
            Error 404
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Página no encontrada
          </h1>

          <p className="text-sm md:text-base text-white/70">
            Parece que te saliste del mapa. Esta ruta no existe o fue movida.
            Vuelve al inicio o revisa nuestras competencias y torneos activos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black px-6 py-3 text-sm md:text-base font-semibold hover:bg-yellow-300 transition"
            >
              Volver al inicio
            </Link>

            <Link
              to="/competencias"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Ver competencias
            </Link>
          </div>

          <p className="text-xs text-white/40">
            Si crees que esta ruta debería existir, revisa el enlace o vuelve
            desde el menú principal.
          </p>
        </div>
      </div>
    </main>
  );
}