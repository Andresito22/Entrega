// REACT
import React, { useContext } from "react";
// REACT ROUTER DOM
import { Link } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import CartWidget from "./CartWidget";

import { Link as ScrollLink } from "react-scroll";
// CSS
import "./NavBar.css";

const NavBar = () => {
  const { isInHome } = useContext(SiteContext);
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <Link to="/" className="navbar-brand">
        Uncoded .io
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <ScrollLink
            to="nosotros"
            className={
              isInHome ? "nav-item nav-link" : "nav-item nav-link disabled"
            }
            smooth={true}
          >
            Nosotros
          </ScrollLink>
          <ScrollLink
            to="productos"
            className={
              isInHome ? "nav-item nav-link" : "nav-item nav-link disabled"
            }
            smooth={true}
          >
            Productos
          </ScrollLink>
          <Link to="/store" className="nav-item nav-link store">
            <span>|</span>Tienda
          </Link>
          <li className="nav-item dropdown">
            <Link
              to="/store"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorías
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/Laptops" className="dropdown-item">
                Laptops
              </Link>
              <Link to="/Sillasgamer" className="dropdown-item">
                Sillas gamer
              </Link>
              <Link to="/Mouse" className="dropdown-item">
                Mouse
              </Link>
              <Link to="/Teclados" className="dropdown-item">
                Teclados
              </Link>
              <Link to="/Audifonos" className="dropdown-item">
                Audifonos
              </Link>
            </div>
          </li>
        </ul>
        <div className="widgets d-flex align-items-center">
          <div>
            <CartWidget/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
