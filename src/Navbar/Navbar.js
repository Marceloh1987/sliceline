import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from "../Styles/Colors";
import { Title } from "../Styles/Title";



const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;

`
const Logo = styled(Title)`
    font-size: 50px;
    color: white;
    text-shadow: 1px 1px 4px #380502;

`
export function Navbar(){
    return <NavbarStyled>
                <Logo>
                    Sliceline <span role="img" aria-label="Snowman">🍕</span>  
                </Logo>    
            </NavbarStyled>;
}