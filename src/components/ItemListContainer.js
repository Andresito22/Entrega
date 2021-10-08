import React, { Fragment, useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';

const ItemContainer = () => {
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      getProduct();
    }, []);
  
    const getProduct = async () => {
      const data = await fetch("https://fakestoreapi.com/products/category/electronics");
      const itemProduct = await data.json();
      setProduct(itemProduct);
    };
  
    return (
      <Fragment>
        <div className="itemContainer">
        </div>
        <ItemList data = {product} />
      </Fragment>
    );
  };

export default ItemContainer;