import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminViajesEditar from '../AdminViajes/AdminViajesEditar';
import ErrorBox from '../Layout/ErrorBox';
import Loading from '../Layout/Loading';
import ENV from '../../environment';

const EditarViaje = props => {
    const uri = props.match.params.uri;
    const [res, useRes] = useState('');
    const headers = {
        authorization: props.authorization
    };

    if (!res) axios.get(ENV.api+'/travels/' + uri)
        .then(resultado => {
            useRes(<AdminViajesEditar action={EditarViaje} data={resultado.data} />)
        })
        .catch(err => {
            useRes(<ErrorBox data={err} />);
        });

    const EditarViaje = (data, callBackOk, callBackError) => {
        axios.patch(ENV.api+'/travels/' + uri, data, { headers })
            .then(res => {
                //callBackOk('/travels/' + data.uri); // Enviar a la ficha del viaje
                callBackOk('/admin/travels/');  // Enviar a edición
            })
            .catch(err => {
                callBackError(err);
            });
    }
    const output = res || <Loading />;
    return (
        <div className="cuadro">
            <h1>Editar viaje</h1>
            {output}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(EditarViaje);