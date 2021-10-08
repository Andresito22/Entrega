import React, { useState } from "react";
import "../styles/ItemCount.css";

/*constructor(props) {
        super(props);
        this.state = {
            count: 1
        }

    }

        increment = () => {
            this.setState({ count: this.state.count + 1}  )

        }

        decrement = () => { 
            this.setState({ count: this.state.count - 1} )
        }

    */

function Contador({ onadd }) {
  const [number, setnumber] = useState(1);
  const add = () => { 
      if (number < 6) {
        setnumber(number + 1);
      }else{
          setnumber(number);    
      }
   
  };
  const less = () => {
    if (number === 1) {
      setnumber(number);
    } else { 
      setnumber(number - 1);
    } 
  };

  return (
    <div>
    <div className="app">
        <p className="titulo">Comprar</p>
        <div className="titulo-2">
      <div className="app-Container">
        <button onClick={less} className="btn-less">
          -
        </button>
        <p className="value" id="value">
          {number}
        </p>
        <button onClick={add} className="btn-add">
          +
        </button>
      </div>
      </div>
    </div>
    <button className="agregar">Agregar al carrito</button>
    </div>
  );
}

export default Contador;
