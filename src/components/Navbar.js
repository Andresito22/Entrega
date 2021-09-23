import React from 'react'
import {Link} from 'react-router-dom'


const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src='./logo2.png' width='100' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/' >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/items' >Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/soporte' >Soporte</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar