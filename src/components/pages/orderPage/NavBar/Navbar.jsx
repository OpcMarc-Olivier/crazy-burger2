import React from "react";
import styled from "styled-components";
import NavBarRight from "./NavBarRight";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../assets/theme";
function Navbar({ userName }) {
    return (
        <NavBarStyled>
            <Logo className={"logo-order-page"} onClick={refreshPage} />
            <NavBarRight userName={userName} />
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    height: 98px;
    padding: 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    .logo-order-page {
        cursor: pointer;
    }
`;

export default Navbar;
