import React from "react";
import styled from "styled-components";
import NavBarRight from "./NavBarRight";

function Navbar({ userName }) {
    return (
        <NavBarStyled>
            <div className="left-side">Left</div>
            <NavBarRight userName={userName} />
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    background: blue;
    height: 10vh;

    .left-side {
        background: violet;
    }
`;

export default Navbar;
