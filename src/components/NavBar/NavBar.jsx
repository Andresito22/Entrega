import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
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
          <Link to="/about" className="nav-item nav-link">
            About Us
          </Link>
          <Link to="/contacto" className="nav-item nav-link">
            Contact Us
          </Link>

          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>|</span> Productos
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/Laptops" className="dropdown-item">
                Laptops
              </Link>
              <Link to="/Sillasgamer" className="dropdown-item">
                Sillas Gamer
              </Link>
              <Link to="/Mouse" className="dropdown-item">
                Mouse
              </Link>
              <Link to="/Teclados" className="dropdown-item">
                Teclados
              </Link>
            </div>
          </li>
        </ul>
        <div className="widgets d-flex align-items-center">
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
