import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "#e0e0e0" }} 
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/" style={{ color: "black" }}>
        📜 Linea de Tiempo
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to='/Introduction' style={{ color: "black" }}>
            Introducción
          </Link>

          <Link className="navbar-item" to="/Conclusion" style={{ color: "black" }}>
            Conclusión
          </Link>

          <Link className="navbar-item" to="/References" style={{ color: "black" }}>
            Referencias
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
