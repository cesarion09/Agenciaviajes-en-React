import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/user';
import { Link } from 'react-router-dom';
import o from 'dmbobjects';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import ENV from '../../environment';

function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setMensajeError]=useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        const body = { username, password };
        axios.post(ENV.api+'/users/auth', body)
            .then(res => {
                const data={
                    ...o.pick(res.data, '_id, username, email, rol'), 
                    authorization: res.headers.authorization
                }
                props.login(data);
                localStorage.setItem('user', JSON.stringify(data));
                props.history.push('/');
            })
            .catch(err=>{
                setMensajeError(err);
            });
    }

    useEffect(s=>{
        setMensajeError('');
    }, [username,password]);

    return (
        <div className="cuadro">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <p><input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    onChange={e => setUserName(e.target.value)}
                    value={username}
                /></p>
                <p><input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                /></p>
                <button>Enviar</button>
                {mensajeError&&<ErrorBox data={mensajeError} />}
            </form>
            <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
    );
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);