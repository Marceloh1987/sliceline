import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';
import { Title } from '../Styles/Title';
import {formatPrice} from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
import {MercadoPago} from '../PagoOnline/pago';

const database = window.firebase.database();

const OrderStyled = styled(Title)`
position: fixed;
right: 0px;
top: 48px;
width: 340px;
background-color: white;
height: calc(100% - 48px);
z-index: 10;
box-shadow: 4px 0px 5px 4px grey;
display: flex;
flex-direction: column; 
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styled.div`
    color: grey;
    font-size: 10;
`;
function sendOrder(orders, {email, displayName}){
    var newOrderRef = database.ref('orders').push();
    const newOrders = orders.map(order => {
        return Object.keys(order).reduce((acc, orderKey) => {
            if(!order[orderKey]) {
                return acc;
            }
            if (orderKey === "toppings") {
                return {
                ...acc,
                [orderKey]: order[orderKey]
                .filter(({ checked}) => checked)
                .map(({ name }) => name)
                };
            }  
            return {
                ...acc,
                [orderKey]: order[orderKey]
            };  
    }, {});
    });
    newOrderRef.set({
        Order: newOrders,
        email,
        displayName
    });
}

export function Order({orders, setOrders, setOpenFood, login, loggedIn}){
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);

    }

    return (
         <OrderStyled>
        {orders.length === 0 ? (
        <OrderContent>
            Tu orden se encuentra vacia
        </OrderContent>) : (
            <OrderContent>
                {" "}
                <OrderContainer> Tu Pedido: </OrderContainer>{" "}
                {orders.map((order, index) => (
                    <OrderContainer editable>
                        <OrderItem
                            onClick={() => {
                            setOpenFood ({...order, index})
                            }}
                        >
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                            <div
                             style={{cursor: "pointer"}} 
                             onClick={e => {
                                 e.stopPropagation();
                                 deleteItem(index);
                             }}
                            >                            
                            <span role="img" aria-label="Basket">
                            🗑️
                            </span>                                                         
                            </div>
                            <div>{formatPrice(getPrice(order))}</div>
                        </OrderItem>
                        <DetailItem>
                            {order.toppings
                            .filter(t => t.checked)
                            .map(topping => topping.name)
                            .join(", ")
                            }
                        </DetailItem>
                        {order.choice && <DetailItem>{order.choice}</DetailItem>}
                    </OrderContainer>
                ))}
                <OrderContainer>
                    <OrderItem>
                        <div/>
                        <div>Total</div>
                        <div>{formatPrice(subtotal)}</div>
                    </OrderItem>
                </OrderContainer>
            </OrderContent>
        )}
        <Link to={{ pathname: '/Pago', query: {orders}}}>
            <DialogFooter>
                <ConfirmButton onClick={() => {
                    if(loggedIn){
                        sendOrder(orders, loggedIn);
                    } else {
                        login();
                    }
                }}>Checkout</ConfirmButton>
            </DialogFooter>
        </Link>
    </OrderStyled>
    );
}