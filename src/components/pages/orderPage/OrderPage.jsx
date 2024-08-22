import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./NavBar/Navbar.jsx";
import Main from "./Main/Main.jsx";
import { theme } from "../../../assets/theme/index.js";
import OrderContext from "../../../context/OrderContext";

function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(true);

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
    };
    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
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
