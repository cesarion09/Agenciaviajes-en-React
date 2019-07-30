import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViajesCuadro from './ViajesCuadro';
import axios from 'axios';
import ErrorBox from '../Layout/ErrorBox';
import Loading from '../Layout/Loading';
import ENV from '../../environment';
import './Viajes.css';

const Viajes = props => {
  const [res, useRes] = useState('');
  const [mas, useMas] = useState('');
  if (!res) axios.get(ENV.api+'/travels/list/visible/7')
    .then(res => {
      let newList = res.data.map(travel => <ViajesCuadro {...travel} key={travel.uri} />);
      if (newList.length > 6) {
        newList = newList.slice(0, 6);
        useMas(<p className="masdestinos"><Link className="boton" to="/destinos">Todos los destinos</Link></p>);
      }
      useRes(newList);
    })
    .catch(err => {
      useRes(<ErrorBox data={err} />);
    })
  const output = res || <Loading />;
  return (
    <div>
      <div className="viajesCuadros">
        {output}
      </div>
      {mas}
    </div >
  )
}

export default Viajes;