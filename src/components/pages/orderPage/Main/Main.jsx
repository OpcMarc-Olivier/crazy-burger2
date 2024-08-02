import React from "react";
import styled from "styled-components";
import { theme } from "../../../../assets/theme";
import Menu from "./Menu";

function Main() {
    return (
        <MainStyled className="main">
            {/* <div className="basket">Basket</div> */}
            <Menu />
        </MainStyled>
    );
}

const MainStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    flex: 1;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    /* .basket {
        background: pink;
    } */
`;

export default Main;
