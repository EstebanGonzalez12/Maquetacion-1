import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Home.css";
import "../components/Servicios";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="sidebar">
        <h2>Home</h2>
        <button onClick={() => navigate("/servicios")}>Servicios</button>
        <button onClick={() => navigate("/contacto")}>Contacto</button>
        <button onClick={() => navigate("/acerca")}>Acerca de Nosotros</button>
        <button onClick={() => navigate("/login")}>Cerrar Sesión</button>
      </div>
      <div className="main-content">
        <h1>Bienvenido al Instituto Educativo Horizonte del Saber</h1>
        <p>
          Nos dedicamos a ofrecer una educación de calidad que forme líderes
          íntegros y comprometidos con el desarrollo de su comunidad.
        </p>
        <p>
          En esta plataforma podrás acceder a los servicios institucionales,
          ponerte en contacto con nosotros, conocer más sobre nuestra misión y
          cerrar sesión de forma segura.
        </p>
      </div>
    </div>
  );
};

export default Home;
