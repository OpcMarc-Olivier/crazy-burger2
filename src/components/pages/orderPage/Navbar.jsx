import React from "react";
import styled from "styled-components";
import NavBarRight from "./NavBarRight";
import Logo from "../../reusable-ui/Logo";

function Navbar({ userName }) {
    return (
        <NavBarStyled>
            <Logo />
            <NavBarRight userName={userName} />
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: blue;
    height: 10vh;
    padding-inline: 20px;
`;

export default Navbar;
