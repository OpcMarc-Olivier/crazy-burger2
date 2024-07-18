import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar({ userName }) {
    return (
        <NavBarStyled>
            <div className="left-side">Left</div>
            <div className="right-side">
                <h1>Bonjour {userName}</h1>
                <NavLink to="/">
                    <button>Déconnexion</button>
                </NavLink>
            </div>
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
    .right-side {
        background: yellow;
    }
`;

export default Navbar;
