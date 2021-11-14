// REACT
import React from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CSS
import "./StoreRoutes.css";

const StoreRoutes = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap mx-5"
      id="productos"
    >
      <Link
        to="/Laptops"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://i.ibb.co/Pcw7msF/laptops.jpg"
          alt="ruta hacia laptops"
          className="img-fluid w-100%"
        />
      </Link>
      <Link
        to="/Sillasgamer"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://i.ibb.co/x1Hfd8T/pexels-alena-darmel-7862606.jpg"
          alt="ruta hacia sillas gamer"
          className="img-fluid w-100%"
        />
      </Link>
      <Link
        to="/Mouse"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://i.ibb.co/TPv0CwH/mouseportada.jpg"
          alt="ruta hacia mouse"
          className="img-fluid w-100%"
        />
      </Link>
      <Link
        to="/Teclados"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://i.ibb.co/6vJWR7Q/pexels-tima-miroshnichenko-5380602.jpg"
          alt="ruta hacia teclados"
          className="img-fluid w-100%"
        />
      </Link>
      <Link
        to="/Audifonos"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://i.ibb.co/kqVWBws/pexels-amateur-wizard-5382359.jpg"
          alt="ruta hacia audifonos"
          className="img-fluid w-100%"
        />
      </Link>
    </div>
  );
};

export default StoreRoutes;
