import React, { Fragment } from "react";
import ItemCount from './itemCount';
import './items.css';

const item = ({title,price,img}) => {
    return (
        <Fragment>
            <a className="item">
                <div className="itemContent">
                    <div className="itemContent-img">
                        <img src = {img} alt=''/>
                    </div>
                    <div className="itemContent-text">
                        <p className="itemPrice">$USD {price}</p>
                        <p className="itemBuy">Comprar</p>
                        <h2>{title}</h2>
                    </div>
                </div>
                <ItemCount/>
            </a>
        

        </Fragment>
    )
}

export default item;