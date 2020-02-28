import React from 'react';

import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

auth.signInWithPopup(provider);

auth.onAuthStateChanged(function(user){
    console.log(user);
}, function(error){
    console.log(error);
});

export const Home = () =>{
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({ ...openFood, ...orders });

    return(
        <div>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <Navbar />
            <Order {...orders} {...openFood} />
            <Banner />
            <Menu {...openFood} />
        </div>
    )
}