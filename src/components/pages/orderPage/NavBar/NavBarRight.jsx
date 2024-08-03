import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

function NavBarRight({ userName }) {
    return (
        <NavBarRightStyled>
            <ToggleButton
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
                labelIfChecked="DESACTIVER LE MODE ADMIN"
            />
            <Profile userName={userName} />
        </NavBarRightStyled>
    );
}

const NavBarRightStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    .admin-button {
    }
`;

export default NavBarRight;
