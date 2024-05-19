import React from 'react'
import logo from '../../assets/images/F03-logo-orange.png'
import styled from 'styled-components';
import { theme } from '../../assets/theme';

function Logo() {
  return (
    <LogoStyled>
        <h1>Crazy
          <img src={logo} alt="logo crazy-burger" />
          burger
        </h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
margin-bottom: 20px;
  h1{
    color: ${theme.colors.primary_burger};
    font-family: "Amatic SC";
    font-size: 110px;
    margin: 0;
    text-align: center;
    

    img {
      position: relative;
      bottom: -36px;
      height: 150px;
      width: 200px;
      padding: 0 20px;
    }
  }
`;
export default Logo