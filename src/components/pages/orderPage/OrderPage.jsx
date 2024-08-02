import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./NavBar/Navbar.jsx";
import Main from "./Main/Main.jsx";
import { theme } from "../../../assets/theme/index.js";

function OrderPage() {
    const { userName } = useParams();
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar userName={userName} />
                <Main />
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        background: red;
        height: 95vh;
        width: calc(100% - 5vh);
        max-width: 1400px;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;

export default OrderPage;
