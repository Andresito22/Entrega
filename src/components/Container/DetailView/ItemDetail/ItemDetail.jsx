// REACT COMPONENTS
import React, { useContext, useState } from "react";
// COMPONENTS
import ItemCount from "../../StoreView/ItemCount/ItemCount";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CSS
import "./ItemDetail.css";
import { CartContext } from "../../../../context/CartContext";

const ItemDetail = ({ data }) => {
  let {
    id,
    thumbnailUrl,
    title,
    description,
    price,
    stock,
  } = data;

  const { cart } = useContext(CartContext);
  console.log(cart);

  const [amount, setAmount] = useState(0);

  const updateAmount = (qty) => {
    setAmount(amount + qty);
  };

  console.log(amount);

  return (
    <div
      className="row d-flex justify-content-center detail_container py-2"
      key={id}
    >
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div>
          <img src={thumbnailUrl} /> 
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <div className="d-flex text_container">
          <div className="bar"></div>
          <div className=" text-left">
            <h5 className="product_title">{title}</h5>
            <p className="product_desc">{description}</p>
            <p className="card-text">{price}</p>
            <div className="buy d-flex align-items-center">
              {amount > 0 ? (
                <Link to="/cart">
                  <button className="finishBtn">terminar compra</button>
                </Link>
              ) : (
                <ItemCount
                  product={data}
                  stock={stock}
                  updateAmount={updateAmount}
                />
              )}
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/" className="return_btn">
                ← ATRAS.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
