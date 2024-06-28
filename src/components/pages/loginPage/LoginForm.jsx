import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";

function LoginForm() {
    //state
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    //comportement

    const handleSubmit = (e) => {
        e.preventDefault();

        setInputValue("");
        navigate(`order/${inputValue}`);
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };
    return (
        <LoginFormStyled action="" onSubmit={handleSubmit}>
            <h2>Bienvenue chez nous!</h2>
            <br />
            <div className="cta-container">
                <h3>Connectez-vous</h3>
                <div className="cta-input-button">
                    <div className="input-wrapper">
                        <IoPersonCircleOutline className="icon-person-circle" />
                        <input
                            required
                            onChange={handleChange}
                            value={inputValue}
                            type=""
                            placeholder="Entrer votre prénom"
                        />
                    </div>
                    <button>
                        <span>Accéder à mon espace</span>
                        <FaChevronRight className="arrow-right" />
                    </button>
                </div>
            </div>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
    width: 400px;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* border: 1px solid red; */
    /* background: #566844; */

    h2 {
        position: relative;
        font-family: "amatic sc";
        font-size: ${theme.fonts.P5};
        font-weight: ${theme.weights.bold};
        text-align: center;
        /* border: 1px solid lightgreen; */

        &::after {
            content: "";
            position: absolute;
            height: 3px;
            width: 100%;
            bottom: -32px;
            left: 0%;
            background-color: ${theme.colors.orange};
        }
    }

    .cta-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        /* border: 3px solid yellow; */
        h3 {
            font-family: "amatic sc";
            font-size: ${theme.fonts.P4};
            /* border: 1px solid yellow; */
            text-align: center;
        }
        .cta-input-button {
            display: flex;
            flex-direction: column;
            /* border: 1px solid lightblue; */
            width: 100%;
            gap: ${theme.spacing.md};
            border-radius: ${theme.spacing.xxs};

            .input-wrapper {
                background: ${theme.colors.white};
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 18px 24px;
                border-radius: ${theme.spacing.xxs};

                .icon-person-circle {
                    color: ${theme.colors.greySemiDark};
                }
            }

            input {
                border-radius: ${theme.spacing.br};
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 9px;
                font-family: Arial;
                font-size: 15px;
                font-weight: 700;
                border: none;
                border-radius: ${theme.spacing.xxs};
                padding-block: 18px;
                color: ${theme.colors.white};
                background-color: ${theme.colors.primary_burger};
            }
        }
    }
`;

export default LoginForm;
