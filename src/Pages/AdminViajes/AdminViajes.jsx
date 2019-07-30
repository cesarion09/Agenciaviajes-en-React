import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import ENV from '../../environment';

const AdminViajes = props => {
    const [confirma, setConfirma] = useState(false);
    const [activado, setActivado] = useState(props.data.activado);
    const [res, setRes] = useState('');
    const headers = {
        authorization: props.authorization
    };
    const editarViaje=()=>{
        props.history.push('/travels/'+props.data.uri+'/edit');
    }
    const fotoViaje=()=>{
        props.history.push('/travels/'+props.data.uri+'/photo');
    }
    const deleteViaje = () => {
        setConfirma(false);
        axios.post(ENV.api+'/travels/'+props.data.uri+'/delete', {}, { headers })
            .then(res => {
                props.reset();
            })
            .catch(err => {
                setRes(<ErrorBox data={err} />)
            })
    }
    const activarViaje=()=>{
        setConfirma(false);
        axios.post(ENV.api+'/travels/'+props.data.uri+'/active', {}, { headers })
            .then(res => {
                setActivado(res.data.activado);
            })
            .catch(err => {
                setRes(<ErrorBox data={err} />)
            })     
    }
    const deleteConfirma = () => {
        setConfirma(true);
    }
    const deleteNoConfirma = () => {
        setConfirma(false);
    }
    return (
        <div>
            <div className="flex-container-fixed mouseover">
                <div className="flex"><Link to={`/travels/${props.data.uri}`}>{props.data.viaje}</Link></div>
                <div className="flex">{props.data.fecha}</div>
                <div className="flex"><span className="boton" onClick={activarViaje}>{activado?'desactivar':'activar'}</span></div>
                <div className="flex">
                    <span className="boton" onClick={editarViaje}>editar</span>
                    <span className="boton" onClick={fotoViaje}>foto</span>
                    <span className="boton" onClick={deleteConfirma}>eliminar</span></div>
            </div>
            {confirma && <div className="confirma"><p>¿Borrar el viaje {props.data.viaje}?</p><p><span className="boton" onClick={deleteViaje}>Sí</span><span className="boton" onClick={deleteNoConfirma}>No</span></p></div>}
            {res}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(withRouter(AdminViajes));