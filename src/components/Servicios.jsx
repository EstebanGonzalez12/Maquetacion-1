import React from "react";
import "../assets/Servicios.css";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="servicios-layout">
      <aside className="sidebar">
        <h2>Servicios</h2>
        <nav>
          <Link to="/home" className="sidebar-link">
            Home
          </Link>
          <Link to="/contacto" className="sidebar-link">
            Contacto
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
        <h1>Bienvenidos a nuestros Servicios Institucionales</h1>
        <p>
          En el Instituto Educativo Horizonte del Saber, ofrecemos una variedad
          de servicios diseñados para apoyar el desarrollo académico, emocional
          y físico de nuestros estudiantes.
        </p>

        <h2>Servicios Académicos</h2>
        <ul>
          <li>Biblioteca Virtual con acceso a más de 10,000 títulos</li>
          <li>
            Tutorías personalizadas en áreas clave como Matemáticas, Lenguaje e
            Inglés
          </li>
          <li>Plataforma educativa para tareas y seguimiento académico</li>
        </ul>

        <h2>Servicios de Apoyo</h2>
        <ul>
          <li>Orientación Psicológica y Consejería Escolar</li>
          <li>Atención a estudiantes con necesidades educativas especiales</li>
          <li>Programa de mediación escolar y resolución de conflictos</li>
        </ul>

        <h2>Servicios Complementarios</h2>
        <ul>
          <li>Comedor escolar con alimentación balanceada</li>
          <li>Actividades extracurriculares (deportes, arte, tecnología)</li>
          <li>Charlas y talleres para padres de familia</li>
        </ul>
      </main>
    </div>
  );
};

export default Servicios;
