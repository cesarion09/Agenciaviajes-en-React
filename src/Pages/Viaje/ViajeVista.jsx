import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ViajeVista.css';

const ViajeVista = props => {
    let { viaje, precio, ahorro, fecha, descripcion, imagen } = props.data;
    console.log(props)
    const editar = props.rol === 'admin' ? <Link className="boton editar" to={`/travels/${props.data.uri}/edit`}>Editar</Link> : null
    return (
        <div id="viaje">
            <div className="destino"><p>{viaje}</p></div>
            <div className="cuadroViajeD" style={{ backgroundImage: `url(/imgs/${imagen})` }}>
                {editar}
                <div className="ahorro"><p>{ahorro}</p></div>
                <div className="precio"><p>{precio}</p></div>
            </div>
            <div className="cuadro">
                <h3>Salida el {fecha}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(ViajeVista);