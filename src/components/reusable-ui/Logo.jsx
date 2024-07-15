import logo from "../../assets/images/F03-logo-orange.png";
import styled from "styled-components";
import { theme } from "../../assets/theme";

function Logo() {
    return (
        <LogoStyled>
            <h1>
                Crazy
                <img src={logo} alt="logo crazy-burger" />
                burger
            </h1>
        </LogoStyled>
    );
}

const LogoStyled = styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
    transform: scale(2.5);
    h1 {
        color: ${theme.colors.primary_burger};
        font-family: "Amatic SC";
        font-size: 36px;
        margin: 0;
        letter-spacing: 1.5px;
        line-height: 1rem;
        text-align: center;
        text-transform: uppercase;

        img {
            vertical-align: middle;
            height: 60px;
            width: 80px;
            margin-inline: 20px;
            /* position: relative;
            bottom: -36px;
            height: 150px;
            width: 200px;
            padding: 0 20px; */
        }
    }
`;
export default Logo;
