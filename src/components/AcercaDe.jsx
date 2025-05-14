import React from "react";
import "../assets/AcercaDe.css";
import { Link } from "react-router-dom";

const AcercaDe = () => {
  return (
    <div className="Acerca-layout">
      <aside className="sidebar">
        <h2>Acerca de Nosotros</h2>
        <nav>
          <Link to="/servicios" className="sidebar-link">
            Servicios
          </Link>
          <Link to="/contacto" className="sidebar-link">
            Contacto
          </Link>
          <Link to="/home" className="sidebar-link">
            Home
          </Link>
          <Link to="/login" className="sidebar-link">
            Cerrar Sesión
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Acerca de Nosotros</h1>
        <p>
          En el <strong>Instituto Educativo Horizonte del Saber</strong> nos
          dedicamos a formar estudiantes íntegros, con pensamiento crítico,
          valores sólidos y una profunda vocación por el aprendizaje.
        </p>

        <h2>Misión</h2>
        <p>
          Brindar una educación de calidad que potencie las habilidades
          individuales de nuestros estudiantes, preparándolos para enfrentar con
          éxito los desafíos del mundo actual.
        </p>

        <h2>Visión</h2>
        <p>
          Ser una institución reconocida por su excelencia académica, innovación
          educativa y compromiso con la transformación social.
        </p>

        <h2>Valores</h2>
        <ul>
          <li>Respeto</li>
          <li>Responsabilidad</li>
          <li>Solidaridad</li>
          <li>Compromiso</li>
          <li>Excelencia</li>
        </ul>
      </main>
    </div>
  );
};

export default AcercaDe;
