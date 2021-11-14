// REACT
import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemList from "../ItemList";
// FIREBASE
import { db } from "../../../Firebase";
// CSS
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getProducts = () => {
    const firebaseProducts = [];
    db.collection("items").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((item) => {
        firebaseProducts.push({ ...item.data(), id: item.id });
      });
      setItems(firebaseProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="item-list-container row px-0 mx-0 my-5">
      {items.length === 0 ? (
        <div className="loadingMsg">
          <p>
            cargando productos...
            <br /> <span className="loadingMsg_Logo">Uncoded .io</span>
          </p>
        </div>
      ) : (
        <ItemList allProducts={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
