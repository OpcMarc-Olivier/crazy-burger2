import React, { useContext } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";
import ToastAdmin from "./ToastAdmin";

function NavBarRight() {
    const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setIsModeAdmin(!isModeAdmin);
    };
    return (
        <NavBarRightStyled>
            <ToggleButton
                isChecked={isModeAdmin}
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
                labelIfChecked="DESACTIVER LE MODE ADMIN"
                onToggle={displayToastNotification}
            />
            <Profile />
            <ToastAdmin />
        </NavBarRightStyled>
    );
}

const NavBarRightStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;

export default NavBarRight;
