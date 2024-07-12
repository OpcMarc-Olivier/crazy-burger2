import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../assets/theme/index";

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
            <div className="form-title">
                <h1>Bienvenue chez nous!</h1>
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <div className="form-content">
                <div className="input-wrapper">
                    <BsPersonCircle />
                    <input
                        required
                        onChange={handleChange}
                        value={inputValue}
                        type=""
                        placeholder="Entrer votre prénom"
                    />
                </div>
                <button className="button-with-icon">
                    <span>Accéder à mon espace</span>
                    <IoChevronForward className="icon" />
                </button>
            </div>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    padding: 2.5rem 2rem;
    margin: 0 auto;
    border-radius: 5px;
    text-align: center;

    .form-title {
        font-family: "Amatic SC";
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        h1 {
            font-size: 48px;
            font-weight: 700;
            margin: 0;
        }
        hr {
            width: 100%;
            border: 1.5px solid #f56a2c;
            margin-block: 40px;
        }
        h2 {
            font-size: 36px;
            margin: 0;
        }
    }

    .form-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 18px;
        width: 400px;

        .input-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 24px;
            color: #d3d3d3;
            border-radius: 5px;
            gap: 13px;
            background: white;

            input {
                border: none;
                padding-right: 184px;
            }

            input::placeholder {
                font-family: Arial;
                font-size: 15px;
            }
        }

        .button-with-icon {
            display: flex;
            align-items: center;
            width: 100%;
            color: white;
            padding: 18px 106px;
            border: 1px solid ${theme.colors.primary_burger};
            background-color: #ff9f1b;
            border-radius: 5px;
            font-family: Arial;
            font-size: ${theme.fonts.P0};
            font-weight: ${theme.weights.heavy};
            line-height: 15px;
            &:hover:not(:disabled) {
                color: ${theme.colors.primary_burger};
                background-color: ${theme.colors.white};
                border: 1px solid ${theme.colors.primary_burger};
                transition: all 200ms ease-in-out;
            }
            &:active {
                color: ${theme.colors.primary_burger};
                background-color: ${theme.colors.white};
                border: 1px solid ${theme.colors.primary_burger};
            }
            &:hover {
                cursor: pointer;
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }

        .icon {
            font-size: ${theme.fonts.P0};
            margin-left: ${theme.spacing.xs};
        }
    }
`;

export default LoginForm;
