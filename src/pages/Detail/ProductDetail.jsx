// REACT
import React, { useContext, useEffect } from "react";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import ItemDetailContainer from "../../components/DetailView/ItemDetailContainer";
import ModalComponent from "../../components/Checkout/CheckoutComponents/ModalComponent";

const ProductDetail = () => {
  const { setIsInStore, setIsInHome, openModal, qtyModal} =
    useContext(SiteContext);

  useEffect(() => {
    setIsInStore(true);
    setIsInHome(false);
  }, [setIsInStore, setIsInHome]);

  return (
    <div>
      <ItemDetailContainer />
      {openModal ? <ModalComponent amount={qtyModal} /> : ""}
    </div>
  );
};

export default ProductDetail;
