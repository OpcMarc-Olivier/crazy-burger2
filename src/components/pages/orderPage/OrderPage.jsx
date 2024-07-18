import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

function OrderPage() {
    const { userName } = useParams();
    return (
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    <h1>Bonjour {userName}</h1>
                    <NavLink to="/">
                        <button>Déconnexion</button>
                    </NavLink>
                </div>
                <div className="main">Main</div>
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: orange;
    height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        background: red;
        height: 95vh;
        width: 1400px;

        .navbar {
            background: blue;
            height: 10vh;
        }
        .main {
            flex: 1;
            background: green;
        }
    }
`;

export default OrderPage;
