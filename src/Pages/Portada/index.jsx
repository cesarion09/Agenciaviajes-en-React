import React from 'react';

import Header from './Header';
import Quienes from './Quienes';
import Contact from './Contact';
import Viajes from '../Viajes';

class Portada extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Viajes />
        <Quienes />
        <Contact />
      </div>
    );
  }
}

export default Portada;
