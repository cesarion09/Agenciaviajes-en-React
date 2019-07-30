import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Redux/Actions/user';
import './Menu.css';

const Menu = props => {
    const logout = () => {
        props.logout();
        localStorage.removeItem('user');
        props.history.push('/');
    }
    return (
        <header>
            <div className="logo"><Link to="/"><img src="/imgs/iconoweb.png" alt="" /></Link></div>
            <div className="menu">
                <Link to="/destinos">Destinos</Link>
                <Link to="/quienes-somos">Quiénes somos</Link>
                <Link to="/donde-estamos">Dónde estamos</Link>
                {!props.rol && <Link to="/login">Log in</Link>}
                {props.rol === 'admin' && <Link to="/admin">Admin</Link>}
                {props.rol && <Link to="" onClick={logout}>Log out</Link>}
            </div>
            <div className="redes">
                (iconos redes sociales)
        </div>
        </header>
    )
}

const mapStateToProps = (state, props) => {
    return {
        rol: state.user.rol
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));