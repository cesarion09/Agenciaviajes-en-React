import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <div className="cabecera">
            <div className="texto">
                <p className="destacado">¡Viaja!</p>
                <p>¡Descubre lugares maravillosos!</p>
                <div className="botonP">
                    <a href="a">ver destinos</a>
                </div>
            </div>
        </div>
    )
}

export default Header;