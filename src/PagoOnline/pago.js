import React, {useEffect, useState} from 'react';
import * as mp from 'mercadopago';
import credentials from './credentials.json'

export function MercadoPago(props) {
    const [mpData, setMpData] = useState(null);
    
    const config = () =>{
        mp.configure({
            sandbox:true,
            access_token: credentials.access_token
        });
        mp.configurations.setAccessToken(credentials.access_token);
    }
    useEffect(()=> {
        config();
    });

    return(
        <div>
            <h1>Pagando...</h1>
            <h5>chequear en consola.</h5>
        </div>
    )
}