/// REACT COMPONENTS
import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemDetail from "./ItemDetail/ItemDetail";
// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const { id, category } = useParams();
  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.mocki.io/v2/f26e251d").then(
        async (response) => {
          try {
            const data = await response.json();
            const filtered = data.find(
              (item) => item.id === parseInt(id) && item.category === category
            );
            setProducts(filtered);
          } catch (error) {
            console.log("Error!");
            console.error(error);
          }
        }
      );
    }, 2500);
  }, [id, category]);
  return (
    <>
      <div className="item-list-container row px-0 mx-0 my-5">
        {!products ? (
          <div className="loadingMsg">
            <p>
              Producto Agotado
              <br /> <span className="loadingMsg_Logo">Uncoded .io</span>
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="loadingMsg">
            <p>
              Cargando detalles..
              <br /> <span className="loadingMsg_Logo">Uncoded .io</span>
            </p>
          </div>
        ) : (
          <ItemDetail data={products} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
