import React, { useState } from 'react';
import axios from 'axios';
import ViajeVista from './ViajeVista';
import ErrorBox from '../Layout/ErrorBox';
import Loading from '../Layout/Loading';
import ENV from '../../environment';

const Viaje = props => {
    const uri = props.match.params.uri;
    const [res, useRes] = useState('');
    if (!res) axios.get(ENV.api+'/travels/' + uri)
        .then(resultado => {
            useRes(<ViajeVista data={resultado.data} />)
        })
        .catch(err => {
            useRes(<ErrorBox data={err} />);
        });

    const output = res || <Loading />;
    return (
        <div>
            {output}
        </div>
    )
}

export default Viaje;