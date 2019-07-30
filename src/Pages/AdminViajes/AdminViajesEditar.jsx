import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBox from '../Layout/ErrorBox';

const PropTypesDefault = {
    data: {
        viaje: '',
        uri: '',
        fecha: '',
        descripcion: '',
        imagen: 'nofoto.jpg',
        precio: '',
        ahorro: ''
    }
}

const AdminViajesEditar = props => {
    const [viaje, setViaje] = useState(props.data.viaje);
    const [fecha, setFecha] = useState(() => {
        const nFecha = props.data.fecha.split('/');
        return nFecha[2] + '-' + ('0' + nFecha[1]).slice(-2) + '-' + ('0' + nFecha[0]).slice(-2);
    });
    const [descripcion, setDescripcion] = useState(props.data.descripcion);
    const [imagen, setImagen] = useState(props.data.imagen);
    const [precio, setPrecio] = useState(isNaN(Number(props.data.precio)) ? 0 : props.data.precio);
    const [ahorro, setAhorro] = useState(isNaN(Number(props.data.ahorro)) ? 0 : props.data.ahorro);
    const [mensajeError, setMensajeError] = useState('');

    const envioOK = url => {
        props.history.push(url);
    }
    const envioError = err => {
        setMensajeError(err);
    }

    useEffect(() => {
        setMensajeError('');
    }, [viaje, fecha, descripcion, imagen, precio, ahorro]);

    const onSubmit = (e) => {
        e.preventDefault();
        props.action({ viaje, fecha, descripcion, imagen, precio, ahorro }, envioOK, envioError);
    }

    return (
        <form onSubmit={onSubmit}>
            <p><input
                type="text"
                placeholder="Viaje"
                name="viaje"
                id="viaje"
                onChange={e => setViaje(e.target.value)}
                value={viaje}
            /></p>
            <p><input
                type="date"
                placeholder="Fecha"
                name="fecha"
                id="fecha"
                onChange={e => setFecha(e.target.value)}
                value={fecha}
            /></p>
            <p><input
                type="text"
                placeholder="Descripcion"
                name="descripcion"
                id="descripcion"
                onChange={e => setDescripcion(e.target.value)}
                value={descripcion}
            /></p>
            <p><input
                type="text"
                placeholder="Imagen"
                name="imagen"
                id="imagen"
                onChange={e => setImagen(e.target.value)}
                value={imagen}
            /></p>
            <p><input
                type="number"
                placeholder="Precio"
                name="precio"
                id="precio"
                onChange={e => setPrecio(e.target.value)}
                value={precio}
            /></p>
            <p><input
                type="number"
                placeholder="Ahorro"
                name="ahorro"
                id="ahorro"
                onChange={e => setAhorro(e.target.value)}
                value={ahorro}
            /></p>
            <button>Enviar</button>
            {mensajeError && <ErrorBox data={mensajeError} />}
        </form>
    );
}

AdminViajesEditar.defaultProps = PropTypesDefault;

export default withRouter(AdminViajesEditar);