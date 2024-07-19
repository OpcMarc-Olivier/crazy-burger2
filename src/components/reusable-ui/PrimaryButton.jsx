import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/index";

function PrimaryButton({ Icon, label }) {
    return (
        <PrimaryButtonStyled>
            <label>{label}</label>
            {Icon && Icon}
        </PrimaryButtonStyled>
    );
}

const PrimaryButtonStyled = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    color: white;
    padding: 18px 106px;
    border: 1px solid ${theme.colors.primary_burger};
    background-color: ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.round};
    font-family: Arial;
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.fonts.weights.heavy};
    line-height: ${theme.fonts.P0};

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
    label {
        cursor: pointer;
    }
`;

export default PrimaryButton;
