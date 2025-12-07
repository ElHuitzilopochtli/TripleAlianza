// src/App.jsx
import React from "react";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import TorneoDelSol from "./pages/TorneoDelSolApertura.jsx";
import Competencias from "./pages/Competencias.jsx"; 
import AdminTorneoDelSol from "./pages/AdminTorneoDelSol.jsx";
import Mejora from "./pages/Mejora.jsx";  
import TorneoDelSolEnero  from "./pages/TorneoDelSolEnero-Febrero.jsx";
import Plantilla  from "./pages/PlantillaParanuevosAnuncios.jsx";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Reglamentos from "./pages/Reglas.jsx";

export default function App() {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Routes>   
          <Route path="/Reglamentos" element={<Reglamentos/>} />
          <Route path="/" element={<Home />} />
          <Route path="/competencias" element={<Competencias />} /> {/* NUEVO */}
          <Route path="/torneo-del-sol-apertura" element={<TorneoDelSol />} />
          <Route path="/mejora" element={<Mejora />} />
          <Route path="/admin/torneo-del-sol" element={<AdminTorneoDelSol />} />
          <Route path="/torneo-del-sol-enero-febrero" element={<TorneoDelSolEnero />} />
          <Route path="/Plantilla" element={<Plantilla />} />
       



<Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
<Route path="/quienes-somos" element={<QuienesSomos />} />
<Route path="/contacto" element={<Contacto />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
