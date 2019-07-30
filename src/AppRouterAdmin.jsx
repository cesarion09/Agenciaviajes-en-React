import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

function AdminRoute({ component: Component, rol, ...rest }) {
    return (
        <Route
            {...rest}
            render={rest => {
                return rol === 'admin' ? <Component {...rest} /> : <ErrorSinPermisos />
            }}
        />
    )
}

function ErrorSinPermisos() {
    return (
        <div className="cuadro">
            <h1>¡Ups! No tienes permisos de administración</h1>
            <p>Esta sección es exclusiva para usuarios con permisos de administración.</p>
            <p><Link className="boton" to="/login">Volver a identificarme</Link></p>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return state.user;
}

export default connect(mapStateToProps)(AdminRoute);