import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Secciones (3 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-3">Políticas</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-yellow-400">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Nosotros</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-yellow-400">¿Quiénes somos?</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <p className="text-sm text-zinc-300">
              <a href="mailto:elhuitzilopochtli@gmail.com" className="hover:text-yellow-400">
                elhuitzilopochtli@gmail.com

              </a>
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 h-px bg-white/10" />

        {/* Redes + Logo + Derechos */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center gap-6 text-2xl text-zinc-300">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" aria-label="X" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/huitzilopochtli_777/" aria-label="Instagram" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="https://discord.gg/9ttJUed5rR" aria-label="Discord" className="hover:text-yellow-400"><FaDiscord /></a>
            <a href="https://www.tiktok.com/@elhuitzilopochtli" aria-label="TikTok" className="hover:text-yellow-400"><FaTiktok /></a>
          </div>

          <div className="inline-block bg-yellow-400 px-3 py-1 font-black text-black tracking-widest rounded">
            TRIPLE ALIANZA
          </div>

          <p className="text-zinc-400 text-sm">All rights reserved © 2025</p>
        </div>
      </div>
    </footer>
  );
}
