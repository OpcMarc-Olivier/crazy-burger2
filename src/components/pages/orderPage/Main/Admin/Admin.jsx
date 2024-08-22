import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../assets/theme";

function Admin() {
    return <AdminStyled>Admin</AdminStyled>;
}
const AdminStyled = styled.div`
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;
export default Admin;
