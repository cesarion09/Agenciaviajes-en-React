import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import './AdminUser.css';
import ENV from '../../environment';

const AdminUser = props => {
    const [confirma, setConfirma] = useState(false);
    const [rol, setRol] = useState(props.data.rol);
    const [res, setRes] = useState('');
    const headers = {
        authorization: props.authorization
    };
    const body = {
        username: props.data.username
    };
    const deleteUser = () => {
        setConfirma(false);
        axios.post(ENV.api+'/users/delete', body, { headers })
            .then(res => {
                props.reset();
            })
            .catch(err => {
                setRes(<ErrorBox data={err} />)
            })
    }
    const rolUser = () => {
        axios.post(ENV.api+'/users/admin', body, { headers })
            .then(res => {
                setRes('');
                setRol(res.data.rol);
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
                <div className="flex">{props.data.username}</div>
                <div className="flex">{rol}</div>
                <div className="flex"><span className="boton" onClick={rolUser}>cambiar rol</span><span className="boton" onClick={deleteConfirma}>eliminar</span></div>
            </div>
            {confirma && <div className="confirma"><p>¿Borrar el usuario {props.data.username}?</p><p><span className="boton" onClick={deleteUser}>Sí</span><span className="boton" onClick={deleteNoConfirma}>No</span></p></div>}
            {res}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(AdminUser);