import React, { useContext } from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs.jsx";
import AdminPanel from "./AdminPanel.jsx";
import OrderContext from "../../../../../context/OrderContext";

function Admin() {
    const { isCollapsed } = useContext(OrderContext);
    return (
        <AdminStyled>
            <AdminTabs />
            {!isCollapsed && <AdminPanel />}
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
