import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "./tabsConfig.jsx";

function AdminPanel() {
    const { currentTabSelected } = useContext(OrderContext);

    const tabs = tabsConfig;

    const tabSelected = getTabSelected(tabs, currentTabSelected);

    return (
        <AdminPanelStyled>
            <p>{tabSelected && tabSelected.label}</p>
        </AdminPanelStyled>
    );
}
const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

    p {
        padding: 0 20px;
    }
`;

export default AdminPanel;
