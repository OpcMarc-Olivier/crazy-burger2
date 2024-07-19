import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../assets/theme/index";
import TextInput from "../../reusable-ui/TextInput.jsx";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";

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
                <TextInput
                    value={inputValue}
                    onChange={handleChange}
                    type="text"
                    placeholder={"Entrez votre prénom"}
                    required
                    Icon={<BsPersonCircle className="icon" />}
                />
                <PrimaryButton
                    label="Accéder à mon espace"
                    Icon={<IoChevronForward className="icon" />}
                />
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
    border-radius: ${theme.borderRadius.round};
    text-align: center;

    .form-title {
        font-family: "Amatic SC";
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        h1 {
            font-size: ${theme.fonts.sizes.P5};
            font-weight: ${theme.fonts.weights.bold};
            margin: 0;
            color: ${theme.colors.white};
        }
        hr {
            width: 100%;
            border: 1.5px solid #f56a2c;
            margin-block: ${theme.gridUnit * 5}px;
        }
        h2 {
            font-size: ${theme.fonts.sizes.P4};
            margin: 0;
            color: ${theme.colors.white};
        }
    }

    .form-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 18px;
        width: 400px;
    }
    .icon {
        font-size: ${theme.fonts.sizes.P0};
    }
`;

export default LoginForm;
