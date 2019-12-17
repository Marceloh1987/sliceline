import styled from "styled-components";
import { Title } from "../Styles/Title";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, .5);
    padding: 5px;
`

export const Food = styled(Title)`
    height: 100px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({img}) => `URL(${img})` };
    background-position: center;
    background-size: cover;
    filter: contrast(150%);
    border-radius: 7%;
    margin-top: 5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: .1s;
    box-shadow: 0px 0px 4px 0px #9E9E9E;
    &:hover {
        cursor: pointer;
        filter: contrast(200%);
        margin-top:0px;
        margin-bottom: 5px;
        box-shadow: 0px 10px 20px 0px #9E9E9E;
    }
`