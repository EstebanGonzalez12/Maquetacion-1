import React from 'react';
import '../assets/Registro.css';
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="registro-container">
      <form className="registro-form">
        <input type="text" placeholder="Usuario" className="registro-input" />
        <input type="password" placeholder="Contraseña" className="registro-input" />
        <input type="text" placeholder="Nombre" className="registro-input" />
        <input type="email" placeholder="Correo" className="registro-input" />
        <button type="submit" className="registro-button">Registrarse</button>
        <div className="link">
          <Link to="/login">Ya tienes una cuenta?</Link>
        </div>
      </form>
    </div>
  );
};

export default Registro;
