// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  const linkDesktop = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-white" : "text-zinc-300 hover:text-white"
    }`;
  const linkMobile = ({ isActive }) =>
    `block w-full px-4 py-3 text-base ${
      isActive ? "text-white" : "text-zinc-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 ring-2 ring-yellow-300/40" />
            <div className="leading-tight">
              <p className="font-extrabold tracking-wide text-base md:text-lg">TRIPLE ALIANZA</p>
              <p className="text-[11px] md:text-xs text-zinc-300">Esports • México</p>
            </div>
          </Link>

          {/* Escritorio */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkDesktop}>Inicio</NavLink>
            <NavLink to="/competencias" className={linkDesktop}>Competencias</NavLink>
          </nav>

          {/* Hamburguesa */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        className={`md:hidden fixed left-0 right-0 top-14 bg-black/95 border-b border-white/10 shadow-lg
                    transition-[max-height,opacity] duration-300 overflow-hidden
                    ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="mx-auto max-w-7xl">
          <div className="py-1 divide-y divide-white/10">
            <NavLink to="/" className={linkMobile}>Inicio</NavLink>
            <NavLink to="/competencias" className={linkMobile}>Competencias</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
