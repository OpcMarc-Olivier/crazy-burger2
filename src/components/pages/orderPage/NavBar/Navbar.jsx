import React from "react";
import styled from "styled-components";
import NavBarRight from "./NavBarRight";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../assets/theme";
function Navbar() {
    return (
        <NavBarStyled>
            <Logo className={"logo-order-page"} onClick={refreshPage} />
            <NavBarRight />
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    height: 13vh;
    padding: 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 1px solid ${theme.colors.greyLight};
    .logo-order-page {
        cursor: pointer;
    }
`;

export default Navbar;
