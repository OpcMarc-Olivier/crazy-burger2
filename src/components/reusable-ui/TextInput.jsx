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
    align-items: center;
    padding: 18px 24px;
    color: #d3d3d3;
    border-radius: ${theme.borderRadius.round};
    gap: 13px;
    background: ${theme.colors.white};
    width: 100%;

    input {
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.dark};
        border: none;
        width: 100%;
        outline: none;
    }

    input::placeholder {
        font-family: Arial;
        font-size: ${theme.fonts.size.P1};
        color: ${theme.colors.greyMedium};
    }

    .icon {
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.size.SM};
    }
`;

export default TextInput;
