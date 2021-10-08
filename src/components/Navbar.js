import React, { Component } from 'react'
import Cardwidget from './CardWidget'
import {Link} from 'react-router-dom'



export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src='/logo2.png' width="150px"></img>
                    </Link>
                    <button className="navbar-toggler" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/catalogo'>Catalogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/carrito'>Carrito de compras</Link>
                            </li>
                        </ul>
                        <li className="nav-item ms-auto">
                                <Link className="nav-link" to='/carrito'><Cardwidget/></Link>
                        </li>
                    </div>
                </div>
            </nav>
        )
    }
}