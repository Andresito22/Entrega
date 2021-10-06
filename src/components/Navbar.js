import React, { Component } from 'react'
import Cardwidget from './Cardwidget';



export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-info" href="#">Andres Sarmiento</a>
                    <button className="navbar-toggler" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carrito de compras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Cardwidget/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}