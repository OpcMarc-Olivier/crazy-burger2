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
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected,
    } = useContext(OrderContext);

    const handleClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleAddClick = () => {
        setIsCollapsed(false);
        setIsAddSelected(true);
        setIsEditSelected(false);
    };

    const handleEditClick = () => {
        setIsCollapsed(false);
        setIsEditSelected(true);
        setIsAddSelected(false);
    };

    return (
        <AdminTabsStyled>
            <Tab
                label=""
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={handleClick}
                className={isCollapsed ? "is-active" : ""}
            />
            <Tab
                label="Ajouter un produit"
                Icon={<AiOutlinePlus />}
                onClick={handleAddClick}
                className={isAddSelected ? "is-active" : ""}
            />
            <Tab
                label="Modifier un produit"
                Icon={<MdModeEditOutline />}
                onClick={handleEditClick}
                className={isEditSelected ? "is-active" : ""}
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

    button {
        margin-left: 1px;
    }
`;

export default AdminTabs;
