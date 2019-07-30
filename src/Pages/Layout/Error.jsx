import React from 'react';

const Error = props => {
    const mensaje = props.text || 'Algo ha salido mal...';
    return (
        <div>
            <h2>Error</h2>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error;