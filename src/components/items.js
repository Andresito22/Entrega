import React, { Fragment, useState } from "react";
import ItemCount from './ItemCount';
import '../styles/Items.css';
import ItemDetail  from "./ItemDetail";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons';

const Item = ({title,price,img,description}) => {
    const [active, setActive] = useState (false)
    const toggle = () => {setActive(!active)}
    return (
        <Fragment>
            <a className="item" onClick={toggle}>
                <div className="itemContent">
                    <div className="itemContent-img">
                        <img src = {img} alt=''/>
                    </div>
                    <div className="itemContent-text">
                        <a onClick={toggle}>
                            <p className="itemPrice">$USD {price}</p>
          
                        </a>
                        
                        <h2>{title}</h2>
                    </div>
                </div>
            </a>
            <ItemDetail active={active} toggle={toggle}>
                <div className="description-item">
                    <div className="item-img">
                        <img src = {img}/>
                    </div>
                    <div className="item-text">
                        <span>{title}</span>
                        <span>{description}</span>
                        <span>$USD{price}</span>
                        <span>FREE SHIPPING <FontAwesomeIcon icon ={faTruck}/></span>
                        <button className="btn-buy">Comprar</button>
                        <ItemCount/> 
                    </div>
                </div>
            </ItemDetail>
        

        </Fragment>
    )
}

export default Item;