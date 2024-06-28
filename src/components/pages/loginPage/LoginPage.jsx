import React, { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
    return (
        <LoginPageStyled>
            <h1>
                Crazee
                <span>
                    <img src={logo} alt="logo" />
                </span>
                Burger
            </h1>
            <LoginForm />
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;
    height: 100vh;
    width: 100vw;

    &::before {
        content: "";
        background: url(${backgroundImage}) rgba(1, 1, 1, 0.7);
        background-size: cover;
        background-position: center;
        background-blend-mode: darken;
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    h1 {
        font-family: "amatic sc";
        font-size: ${theme.fonts.P7};
        /* border: 1px solid green; */
        text-align: center;
        color: ${theme.colors.primary};

        img {
            padding-inline: ${theme.spacing.sm};
            width: 200px;
            vertical-align: middle;
        }
    }
`;
export default LoginPage;
