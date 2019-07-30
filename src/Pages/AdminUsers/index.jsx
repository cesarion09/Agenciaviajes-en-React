import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import AdminUser from './AdminUser';
import ErrorBox from '../Layout/ErrorBox';
import Loading from '../Layout/Loading';
import ENV from '../../environment';

const UserAdmin = props => {
    const [res, useRes] = useState('');
    const headers = {
        authorization: props.authorization
    };
    const reset = () => {
        useRes('');
    }
    if (!res) axios.get(ENV.api+'/users/', { headers })
        .then(res => {
            const newList = res.data.map(user => <AdminUser data={user} reset={reset} key={user._id} />);
            useRes(newList);
        })
        .catch(err => {
            useRes(<ErrorBox data={err} />);
        })
    const output = res || <Loading />;
    return (
        <div className="cuadro">
            <h2>Usuarios</h2>
            <div className="flex-container-fixed">
                <div className="flex-cab">Usuario</div>
                <div className="flex-cab">Rol</div>
                <div className="flex-cab">Acciones</div>
            </div>
            {output}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(withRouter(UserAdmin));