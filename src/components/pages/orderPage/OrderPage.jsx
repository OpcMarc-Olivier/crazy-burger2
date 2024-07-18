import React from "react";
import { NavLink, useParams } from "react-router-dom";

function OrderPage() {
    const { userName } = useParams();
    return (
        <div>
            <h1>Bonjour {userName}</h1>
            <NavLink to="/">
                <button>Déconnexion</button>
            </NavLink>
        </div>
    );
}

export default OrderPage;
