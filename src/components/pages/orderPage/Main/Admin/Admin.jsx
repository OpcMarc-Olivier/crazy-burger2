import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import AdminTabs from "./AdminTabs.jsx";
import AdminPanel from "./AdminPanel.jsx";

function Admin() {
    return (
        <AdminStyled>
            <AdminTabs />
            <AdminPanel />
        </AdminStyled>
    );
}
const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;
export default Admin;
