import React from 'react';
import { Link } from 'react-router-dom';

const Administrador = props => {
    return (
        <div className="cuadro">
        <h1>Administrador</h1>
        <p><Link className="boton" to="/admin/users">Administrar usuarios</Link></p>
        <p><Link className="boton" to="/admin/travels">Administrar viajes</Link></p>
        </div>
    )
}

export default Administrador;