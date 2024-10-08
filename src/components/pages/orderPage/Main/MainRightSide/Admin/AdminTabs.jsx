import React, { useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../../../reusable-ui/Tab.jsx";
import { theme } from "../../../../../../assets/theme/index.js";
import OrderContext from "../../../../../../context/OrderContext.js";
import { tabsConfig } from "./tabsConfig.jsx";

function AdminTabs() {
    const {
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
    } = useContext(OrderContext);

    const selectTab = (tabSelected) => {
        setIsCollapsed(false);
        setCurrentTabSelected(tabSelected);
    };

    const tabs = tabsConfig;

    return (
        <AdminTabsStyled>
            <Tab
                index="chevron"
                label=""
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={isCollapsed ? "is-active" : ""}
            />
            {tabs.map((tab) => (
                <Tab
                    key={tab.index}
                    index={tab.index}
                    label={tab.label}
                    Icon={tab.Icon}
                    onClick={() => selectTab(tab.index)}
                    className={
                        currentTabSelected === tab.index ? "is-active" : ""
                    }
                />
            ))}
        </AdminTabsStyled>
    );
}

const AdminTabsStyled = styled.div`
    display: flex;
    position: absolute;
    top: -43px;
    left: 5%;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
    }

    button {
        margin-left: 1px;
    }
`;

export default AdminTabs;
