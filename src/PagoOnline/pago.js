import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as mp from 'mercadopago';
import credentials from './credentials.json'
import { Navbar } from '../Navbar/Navbar';
import { Banner } from '../Banner/Banner';
import { GlobalStyle }  from '../Styles/GlobalStyle';
import styled from 'styled-components';

export function MercadoPago(props) {

    const orders = props.location.query.orders;
    const [mpData, setMpData] = useState(null);
    
    const config = () =>{
        mp.configure({
            sandbox:true,
            access_token: credentials.access_token
        });
        mp.configurations.setAccessToken(credentials.access_token);
    }
    const creatingPreferences = (data) => {
        let items = Items(data);
        const preferences = {
            items: items,
            payer: {
                name: 'alguien',
                surname: 'queseyo',
                email: 'laconshaumare@gmail.com'
            },
            back_urls: {
                success: 'https://google.cl',
                pending: 'https://www.facebook.com',
                failure: 'https://www.youtube.com'
            }
        }
        return preferences;
    }

    const Items = (data) => {
        const itemPreference = data.map((order) =>{
            return(
                {
                    title: order.name,
                    description: order.section,
                    quantity: order.quantity,
                    currency_id: 'CLP',
                    unit_price: order.price
                }
            )
        })
        return itemPreference;
    }


    useEffect(()=> {
        config();
        let preferences = creatingPreferences(orders);

        mp.preferences.create(preferences).then((data) =>{
            console.log(data);
            setMpData(data.body.init_point)
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    const payURL = () =>{
        return (
            <Link to={mpData} />
        )
    }

    const PayForm = styled.div`
    height: 100px; 
    padding: 10px; 
    font-size: 20px; 
    background-position: center;
    background-size: cover;
    
    margin-top: 5px; 
    transition-property: box-shadow margin-top filter; 
   

    `

    return (
        <>
        <GlobalStyle/>
        <Navbar/>
        <Banner/>
        <PayForm>
        <div>
            <h1>Pagando...</h1>
            <h5>chequear en consola.</h5>
            <br/>
            <br/>
            <h3>Detalle</h3>
            {orders.map((order,i) =>{
                return(
                    <li key={i}>
                        <ul>nombre: {order.name}</ul>
                        <ul>Valor: ${order.price}</ul>
                    </li>

                )
            })}
            <a href={mpData}>
                Pagar!
            </a>


        </div>
        </PayForm>
        </>
    )
}