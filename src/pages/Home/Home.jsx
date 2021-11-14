// REACT
import React, { useContext, useEffect } from "react";
// CONTECT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import StoreRoutes from "./HomeComponents/StoreRoutes/StoreRoutes";
import { Link as ScrollLink } from "react-scroll";

// CSS
import "./Home.css";

const Home = () => {
  const { setIsInStore, setIsInHome, setSearchImput } = useContext(SiteContext);

  useEffect(() => {
    setIsInStore(false);
    setIsInHome(true);
    setSearchImput("");
  }, [setIsInStore, setIsInHome, setSearchImput]);

  return (
    <div>
      <div className="hero-container d-flex justify-content-center align-items-center ">
        <h2>Uncoded .io</h2>
        <p className="hero-text ml-4 mt-3">Modern Technology Store</p>
      </div>
      <div
        className="info-container d-flex justify-content-between align-items-center flex-wrap"
        id="nosotros"
      >
        <h2>U.</h2>
        <div className="text-container col-lg-3 col-12">
          <h3>Quiénes somos</h3>
          <p>
          Somos una tienda de tecnologia especializada con más de 15 años de trayectoria en el mercado, destacada por ofrecer a nuestros clientes Gamers la más completa asesoría y actualizaciones del fascinante mundo de la tecnologia enfocada en los videojuegos.
          </p>
        </div>
        <div className="text-container col-lg-3 col-12">
          <h3>Qué hacemos</h3>
          <p>
          En nuestra tienda podrás encontrar una amplia oferta de productos, entre laptops, teclados, sillas gamer y tecnología en general, con los más altos estándares de calidad y un excelente servicio al cliente. VISITANOS Y TE ATENDEREMOS CON LA MEJOR ACTITUD Y EXPERIENCIA.
          </p>
        </div>
        <div className="text-container col-lg-3 col-12">
          <h3>Dónde estamos</h3>
          <p>
            Contamos con 3 tiendas fisicas en Colombia, BUCARAMANGA cra 42 #12-14;
            BOGOTA autopista sur 9-12 local 13 y por ultimo en MEDELLIN C.C ultimate local 112. También contamos con envio a todo el país y de ser necesario realizamos envios fuera del pais como a Chile,
            Uruguay, Argentina y Perú.
          </p>
        </div>
      </div>
      <StoreRoutes />
      <div className="d-flex justify-content-center">
        <ScrollLink to="navbar" className="returnBtn" smooth={true}>
          <i className="fas fa-arrow-up d-flex flex-column text-center">
            <span>Volver</span>
          </i>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Home;
