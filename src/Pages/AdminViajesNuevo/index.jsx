import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminViajesEditar from '../AdminViajes/AdminViajesEditar';
import ENV from '../../environment';

const NuevoViaje = props => {
    const headers = {
        authorization: props.authorization
    };

    const crearViaje = (data, callBackOk, callBackError) => {
        axios.post(ENV.api+'/travels/', data, {headers})
            .then(res => {
                callBackOk('/admin/travels');
            })
            .catch(err => {
                callBackError(err);
            });
    }

    return (
        <div className="cuadro">
            <h1>Nuevo viaje</h1>
            <AdminViajesEditar action={crearViaje} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(NuevoViaje);