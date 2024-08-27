import React, { useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { theme } from "../../../../../assets/theme/index.js";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../context/OrderContext";

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

    return (
        <AdminTabsStyled>
            <Tab
                label=""
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={isCollapsed ? "is-active" : ""}
            />
            <Tab
                label="Ajouter un produit"
                Icon={<AiOutlinePlus />}
                onClick={() => selectTab("add")}
                className={currentTabSelected === "add" ? "is-active" : ""}
            />
            <Tab
                label="Modifier un produit"
                Icon={<MdModeEditOutline />}
                onClick={() => selectTab("edit")}
                className={currentTabSelected === "edit" ? "is-active" : ""}
            />
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
