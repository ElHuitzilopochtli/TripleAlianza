// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import TorneoDelSol from "./pages/TorneoDelSol.jsx";
import Competencias from "./pages/Competencias.jsx"; 
import AdminTorneoDelSol from "./pages/AdminTorneoDelSol.jsx";

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competencias" element={<Competencias />} /> {/* NUEVO */}
          <Route path="/torneo-del-sol" element={<TorneoDelSol />} />
          <Route path="/admin/torneo-del-sol" element={<AdminTorneoDelSol />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
