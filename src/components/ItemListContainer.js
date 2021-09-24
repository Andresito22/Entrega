import React, { Fragment } from 'react'
import './ItemListContainer.css'

const Saludo = (props) => {
    return(
        <Fragment>
            <div className="listcontainer">
                <div className="container-item">
                    <div className="container-item__greeting">
                        <img src="https://img.icons8.com/emoji/48/000000/person.png"/>
                        <p>Bienvenido {props.usuario}</p>
                    </div>
                </div>

            </div>
        </Fragment>)
}

export default Saludo;