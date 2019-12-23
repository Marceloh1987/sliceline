import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
//Components
import { Home } from '../../home';
import { MercadoPago } from '../../PagoOnline/pago';
import { MpSuccess } from '../../PagoOnline/success';


export const Routes = () =>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Pago' component={MercadoPago} />
                <Route path='/Transaction/Success' component={MpSuccess} />
            </Switch>
        </BrowserRouter>
    )
}