import React, { useState } from 'react';
import ViajesCuadro from '../Viajes/ViajesCuadro';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import Loading from '../Layout/Loading';
import ENV from '../../environment';
import './Destinos.css';
import madrid from '../../../public/images/madrid.JPG';
import src from 'app-modules';

const Destinos = props => {
  const [res, useRes] = useState('');
  if (!res) axios.get(ENV.api+'/travels/list/visible/0')
    .then(res => {
      let newList = res.data.map(travel => <ViajesCuadro {...travel} key={travel.uri} />);
      useRes(newList);
    })
    .catch(err => {
      useRes(<ErrorBox data={err} />);
    })
  const output = res || <Loading />;
  return (
    <div className="destinos">
      <h1>Descubre todos los destinos</h1>
      <div className="viajesCuadros">
        {output}
        <div className="todosDestinos">
        <div className="destino1"></div>
           <img src={madrid} alt="destino1"/>




        </div>
      </div>
    </div >
  )
}

export default Destinos;