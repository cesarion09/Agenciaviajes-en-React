import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import ENV from '../../environment';

function Register(props) {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setMensajeError]=useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const body = { username, email, password };
        axios.post(ENV.api+'/users/', body)
            .then(res => {
                props.history.push('/login');
            })
            .catch(err=>setMensajeError(err));
    }
    
    useEffect(s=>{
        setMensajeError('');
    }, [username,email,password]);

    return (
        <div className="cuadro">
            <h1>Registro</h1>
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
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
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
            <p>¿Ya tienes cuenta? <Link to="/login">Identifícate</Link></p>
        </div>
    );
}

export default Register;