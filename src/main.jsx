import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

function GlobalGlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Brillos grandes suaves */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.14),transparent_40%),
              radial-gradient(circle_at_85%_25%,rgba(250,204,21,0.10),transparent_45%),
              radial-gradient(circle_at_25%_85%,rgba(250,204,21,0.12),transparent_50%),
              radial-gradient(circle_at_75%_80%,rgba(250,204,21,0.08),transparent_55%)]
        "
      />

      {/* Textura de chispas/dots */}
      <div
        className="
          absolute inset-0 opacity-25 mix-blend-screen
          bg-[radial-gradient(rgba(250,204,21,0.35)_1px,transparent_1px)]
          [background-size:18px_18px]
        "
      />

      {/* Orbes extra */}
      <span className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <span className="absolute top-32 right-10 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />
      <span className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* CONTENEDOR GLOBAL */}
      <div className="relative min-h-screen bg-[#050509] text-white overflow-hidden">
        <GlobalGlowBackground />
        <div className="relative">
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
