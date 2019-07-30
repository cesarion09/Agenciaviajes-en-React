import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import ENV from '../../environment';
import './index.css';

const AdminFotoViaje = props => {
    const [mensajeError, setMensajeError] = useState('');
    const [loading, setLoading] = useState('');
    const [fotoActual, setFotoActual] = useState('');
    const onChange = e => {
        const headers = {
            contentType: 'multipart/form-data',
            authorization: props.authorization
        }
        const file = e.target.files[0]
        var formData = new FormData();
        formData.append('file', file);
        axios.post(ENV.api + '/travels/' + props.match.params.uri + '/photo', formData, { headers })
            .then(res => {
                props.history.push('/admin/travels/');
            })
            .catch(err => {
                setLoading('');
                setMensajeError(err);
            });
        setLoading(<p className="enviando">Enviando imagen...</p>);
    }
    if (fotoActual==='') axios.get(ENV.api + '/travels/' + props.match.params.uri)
        .then(res => {
            setFotoActual(<img className="fotoprevia" src={`${ENV.api}/imgs/${res.data.imagen}`} alt="Foto actual" />)
        })
        .catch(err => {
            setMensajeError(err);
        })
    return (
        <div className="cuadro">
            <h1>Foto del viaje</h1>
            <form>
                <input type="file" onChange={onChange} />
                {loading}
                {mensajeError && <ErrorBox data={mensajeError} />}
            </form>
            {fotoActual}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(withRouter(AdminFotoViaje));