import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar({ userName }) {
    return (
        <NavBarStyled>
            <h1>Bonjour {userName}</h1>
            <NavLink to="/">
                <button>Déconnexion</button>
            </NavLink>
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    background: blue;
    height: 10vh;
`;

export default Navbar;
