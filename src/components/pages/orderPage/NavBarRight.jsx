import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBarRight({ userName }) {
    return (
        <NavBarRightStyled>
            <h1>Bonjour {userName}</h1>
            <NavLink to="/">
                <button>Déconnexion</button>
            </NavLink>
        </NavBarRightStyled>
    );
}

const NavBarRightStyled = styled.div`
    background: yellow;
`;

export default NavBarRight;
