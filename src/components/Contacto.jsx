import React from "react";
import "../assets/Contacto.css";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="contacto-layout">
      <aside className="sidebar">
        <h2>Contacto</h2>
        <nav>
          <Link to="/servicios" className="sidebar-link">
            Servicios
          </Link>
          <Link to="/home" className="sidebar-link">
            Home
          </Link>
          <Link to="/acerca" className="sidebar-link">
            Acerca de Nosotros
          </Link>
          <Link to="/login" className="sidebar-link">
            Cerrar Sesión
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Contacto</h1>
        <p>
          Si deseas comunicarte con el{" "}
          <strong>Instituto Educativo Horizonte del Saber</strong>, estamos
          disponibles para atender cualquier inquietud o sugerencia.
        </p>

        <h2>Información de Contacto</h2>
        <ul>
          <li>
            <strong>Dirección:</strong> Calle del Conocimiento #123, Ciudad
            Educativa
          </li>
          <li>
            <strong>Teléfono:</strong> (123) 456-7890
          </li>
          <li>
            <strong>Correo Electrónico:</strong> contacto@horizontesaber.edu
          </li>
          <li>
            <strong>Horario de Atención:</strong> Lunes a Viernes, 8:00 a.m. -
            4:00 p.m.
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Contacto;
