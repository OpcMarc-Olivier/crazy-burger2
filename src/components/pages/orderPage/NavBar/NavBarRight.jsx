import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

function NavBarRight({ userName }) {
    return (
        <NavBarRightStyled>
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile userName={userName} />
        </NavBarRightStyled>
    );
}

const NavBarRightStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    /* .admin-button {
        background: red;
    } */
`;

export default NavBarRight;
