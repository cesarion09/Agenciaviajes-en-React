import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = props => {
    return (
        <footer>
        <div className="flex">
            <div className="ayuda">
                <div>
                    <p className="gordo">¿NECESITAS AYUDA?</p>
                    <p>0264 123 4567</p>
                    <p>enquiry@geekshubstravels.com</p>
                    <small>Lun-Vie: 9:30-19:00 Sab: 10:00-14:00</small>
                </div>
            </div>
            <div className="informacion">
                <p className="gordo">INFORMACIÓN</p>
                <p><Link to="quienes-somos">Quiénes somos</Link></p>
                <p><Link to="preguntas-frecuentes">Preguntas frecuentes</Link></p>
                <p><Link to="politica-privacidad">Política de privacidad</Link></p>
                <p><Link to="condiciones-generales">Condiciones generales</Link></p>
                <p><Link to="aviso-legal">Aviso legal</Link></p>
                <p><Link to="contacto">Contacto</Link></p>
                <p><Link to="programa-puntos">Programa de puntos</Link></p>
            </div>
            <div className="newsletter">
                <p className="gordo">SUSCRÍBETE A LA NEWSLETTER</p>
                <form>
                    <p><input type="input" name="email"></input></p>
                    <p><button>SUSCRÍBETE</button></p>
                </form>
            </div>
            </div>
            <div className="pie"><small>Copyright 2019</small></div>
        </footer>
    )
}

export default Footer;