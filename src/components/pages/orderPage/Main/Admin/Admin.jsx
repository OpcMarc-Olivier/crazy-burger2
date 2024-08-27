import React from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs.jsx";
import AdminPanel from "./AdminPanel.jsx";

function Admin({
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
}) {
    return (
        <AdminStyled>
            <AdminTabs
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                isAddSelected={isAddSelected}
                setIsAddSelected={setIsAddSelected}
                isEditSelected={isEditSelected}
                setIsEditSelected={setIsEditSelected}
            />
            {!isCollapsed && (
                <AdminPanel
                    isAddSelected={isAddSelected}
                    isEditSelected={isEditSelected}
                />
            )}
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
