import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Menu from './Pages/Layout/Menu';
import Footer from './Pages/Layout/Footer';
import Portada from './Pages/Portada';
import Login from './Pages/Login';
import Viaje from './Pages/Viaje';
import Register from './Pages/Register';
import Administrador from './Pages/Admin';
import AdminUsers from './Pages/AdminUsers';
import AdminViajes from './Pages/AdminViajes';
import NuevoViaje from './Pages/AdminViajesNuevo';
import EditarViaje from './Pages/AdminViajesEditar';
import AdminRoute from './AppRouterAdmin'; 
import Destinos from './Pages/Destinos';
import AdminFotoViaje from './Pages/AdminFotoViaje';

function Layout(props) {
    return (
        <div>
            <Menu />
            {props.children}
            <Footer />
        </div>
    );
}

function AppRouter(props) {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={Portada} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/destinos" component={Destinos} exact />
                    <Route path="/travels/:uri" component={Viaje} exact />
                    <AdminRoute path="/admin" component={Administrador} exact />
                    <AdminRoute path="/admin/users" component={AdminUsers} exact />
                    <AdminRoute path="/admin/travels" component={AdminViajes} exact />
                    <AdminRoute path="/admin/travels/new" component={NuevoViaje} exact />
                    <AdminRoute path="/travels/:uri/edit" component={EditarViaje} exact />
                    <AdminRoute path="/travels/:uri/photo" component={AdminFotoViaje} exact />
                    <Route path="*" component={Error404} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

function Error404() {
    return (
        <div className="cuadro">
            <h1>¡Ups! No encontramos esta página...</h1>
            <p>Posiblemente estamos trabajando en ella y estará disponible en breve.</p>
            <p><Link className="boton" to="/">Volver a la portada</Link></p>
        </div>
    );
}

export default AppRouter;
