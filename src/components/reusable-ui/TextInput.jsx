import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../assets/theme/index";

function TextInput({ value, onChange, Icon, className, ...extraProps }) {
    return (
        <InputStyled>
            {Icon && Icon}
            <input onChange={onChange} value={value} {...extraProps} />
        </InputStyled>
    );
}

const InputStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    color: #d3d3d3;
    border-radius: 5px;
    gap: 13px;
    background: white;

    .icon {
        font-size: ${theme.fonts.P0};
        margin-left: ${theme.spacing.xs};
    }

    input {
        border: none;
        padding-right: 184px;
    }

    input::placeholder {
        font-family: Arial;
        font-size: 15px;
    }
`;

export default TextInput;
