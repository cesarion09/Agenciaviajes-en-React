import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminViajes from './AdminViajes';
import ErrorBox from '../Layout/ErrorBox';
import Loading from '../Layout/Loading';
import ENV from '../../environment';

const ViajesAdmin = props => {
    const [res, useRes] = useState('');
    const headers = {
        authorization: props.authorization
    };
    const reset = () => {
        useRes('');
    }
    if (!res) axios.get(ENV.api+'/travels/list/all/0', { headers })
        .then(result => {
            const newList = result.data.map(viaje => <AdminViajes data={viaje} reset={reset} key={viaje._id} />);
            useRes(newList);
        })
        .catch(err => {
            useRes(<ErrorBox data={err} />)
        })
        const output = res || <Loading />;
    return (
        <div className="cuadro">
            <h2>Viajes</h2>
            <Link className="boton" to="/admin/travels/new">Nuevo viaje</Link>
            <div className="flex-container-fixed">
                <div className="flex-cab">Viaje</div>
                <div className="flex-cab">Fecha</div>
                <div className="flex-cab">Estado</div>
                <div className="flex-cab">Acciones</div>
            </div>
            {output}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(ViajesAdmin);