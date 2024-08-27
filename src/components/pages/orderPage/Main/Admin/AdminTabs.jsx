import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { theme } from "../../../../../assets/theme/index.js";

function AdminTabs({ isCollapsed, setIsCollapsed }) {
    const handleClick = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <AdminTabsStyled>
            <Tab
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={handleClick}
                className={isCollapsed ? "is-active" : ""}
            />
        </AdminTabsStyled>
    );
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
    }
`;

export default AdminTabs;
