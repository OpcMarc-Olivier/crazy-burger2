import logo from "../../assets/images/F03-logo-orange.png";
import styled from "styled-components";
import { theme } from "../../assets/theme";

function Logo({ className }) {
    return (
        <LogoStyled className={className}>
            <h1>
                Crazy
                <img src={logo} alt="logo crazy-burger" />
                burger
            </h1>
        </LogoStyled>
    );
}

const LogoStyled = styled.div`
    margin-bottom: ${theme.spacing.md};
    margin-top: ${theme.spacing.md};
    h1 {
        color: ${theme.colors.primary_burger};
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.sizes.P5};
        font-weight: ${theme.fonts.weights.bold};
        margin: 0;
        letter-spacing: 1.5px;
        line-height: 1rem;
        text-align: center;
        text-transform: uppercase;

        img {
            vertical-align: middle;
            height: 60px;
            width: 80px;
            margin-inline: ${theme.spacing.md};
        }
    }
`;
export default Logo;
