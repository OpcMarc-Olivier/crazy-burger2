import React from "react";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";

function AdminTabs() {
    return (
        <AdminTabsStyled>
            <Tab Icon={<FiChevronDown />} />
        </AdminTabsStyled>
    );
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;
`;

export default AdminTabs;
