import React from "react";
import styled from "styled-components";
import NavBarRight from "./NavBarRight";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../assets/theme";

function Navbar({ userName }) {
    return (
        <NavBarStyled>
            <Logo className={"logo-order-page"} />
            <NavBarRight userName={userName} />
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    height: 11vh;
    padding: 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    .logo-order-page {
        transform: scale(0.8);
    }
`;

export default Navbar;
