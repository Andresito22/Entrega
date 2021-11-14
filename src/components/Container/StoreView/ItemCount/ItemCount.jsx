// REACT COMPONENTS
import React, { useState, useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
// CSS
import "./ItemCount.css";

const ItemCount = ({ product, stock, updateAmount }) => {
  const [productStock, setProductStock] = useState(stock);

  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (productStock >= 1) {
      setCount(count + 1);
      setProductStock(productStock - 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setProductStock(productStock + 1);
    }
  };

  const { addToCart } = useContext(CartContext);

  const onAdd = () => {
    if (count >= 1) {
      addToCart(product, count);
      updateAmount(count);
      setCount(0);
      alert(`Se añadieron ${count} productos al carrito.`);
    } else {
      alert(`Se tiene que agregar al menos un producto.`);
    }
  };

  return (
    <div className="d-flex">
      <div className="btn_amount d-flex">
        <button className="btn_rem" onClick={handleDecrement}>
          -
        </button>
        <div className="amount">{count}</div>
        <button className="btn_add" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div>
        <button className="btn_addToCart" onClick={onAdd}>
          añadir
        </button>
      </div>
    </div>
  );
};

export default ItemCount;