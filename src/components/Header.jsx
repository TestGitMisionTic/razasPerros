import React from 'react'
import logo from '../media/loggo.png';

const Header = () => {
    return (
        <div>
             <header>
                <ul className="navbar">
                    <li>
                        <img src={logo} className="logo" alt="imagen" />
                    </li>
                    <li>
                        <button className="botonGenerico mainButton">Nuevo post</button>
                    </li>
                    <li>
                        <div className="buscar">
                            <input placeholder="Buscar raza" />
                            <i className="fas fa-search botonGenerico iconoBusqueda"></i>
                        </div>
                    </li>
                    <li>
                        <button className="botonGenerico secondaryButton">Login</button>
                    </li>
                    <li>
                        <button className="botonGenerico mainButton">Registro</button>
                    </li>

                </ul>
            </header>
        </div>
    )
}

export default Header;
 