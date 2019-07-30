import React from 'react';
import { Link } from 'react-router-dom';
import './ViajesCuadro.css';
import ENV from '../../environment';

const ViajesCuadro = props => {
    return (
        <Link to={`/travels/${props.uri}`} className="cuadroViaje" style={{ backgroundImage: `url(${ENV.api}/imgs/${props.imagen})` }}>
            <div className="destino"><p>{props.viaje}</p></div>
            <div className="ahorro"><p>{props.ahorro}</p></div>
            <div className="precio"><p>{props.precio}</p></div>
        </Link>
    )
}

export default ViajesCuadro;