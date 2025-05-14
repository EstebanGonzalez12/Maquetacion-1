import React, { useState } from "react";
import "../assets/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Estado para guardar los valores de los inputs
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (usuario === "admin" && contrasena === "1234") {
      setError("");
      navigate("/home");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
    <div className="login-welcome">
      <h1>Instituto Educativo Horizonte del Saber</h1>
      <p>
        Inicia sesión para acceder a tu entorno de aprendizaje virtual, donde podrás consultar tus clases, tareas y materiales académicos.
      </p>
    </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          className="login-input"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="link">
          <Link to="/registro">¿No tiene una cuenta?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
