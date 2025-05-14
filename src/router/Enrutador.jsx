import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Registro from "../components/Registro";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import AcercaDe from "../components/AcercaDe";

function Enrutador() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/acerca" element={<AcercaDe />} />
    </Routes>
  );
}

export default Enrutador;
