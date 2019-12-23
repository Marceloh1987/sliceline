import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
//Components
import { Home } from '../../home';
import { MercadoPago } from '../../PagoOnline/pago';


export const Routes = () =>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Pago' component={MercadoPago} />
            </Switch>
        </BrowserRouter>
    )
}