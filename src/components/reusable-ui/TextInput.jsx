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
    background: ${theme.colors.white};

    input {
        color: ${theme.colors.dark};
        border: none;
        padding-right: 184px;
        outline: none;
    }

    input::placeholder {
        font-family: Arial;
        font-size: ${theme.fonts.size.P1};
        color: ${theme.colors.greyMedium};
        width: 300px;
    }

    .icon {
        color: ${theme.colors.greyDark};
    }
`;

export default TextInput;
