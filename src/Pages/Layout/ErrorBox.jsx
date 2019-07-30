import React from 'react';

const ErrorBox = props => {
    let mensaje = '';
    try {
        mensaje = props.data.response.data.message;
    } catch{
        mensaje = '';
    }
    try {
        if (!mensaje) mensaje = props.data.message;
    } catch{
        mensaje = '';
    }
    try {
        if (!mensaje) mensaje = props.data;
    } catch {
        mensaje = '';
    }
    if (!mensaje) mensaje = 'Algo ha salido mal...';
    return (
        <p className="error">
            {mensaje}
        </p>
    )
}

export default ErrorBox;