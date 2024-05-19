import React, { useState } from "react"
import styled from 'styled-components'
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import backgroundImage from '../../../assets/images/F03-burger-background.jpg'
import { theme } from "../../../assets/theme/index";

function LoginPage() {
  
  return (
    <LoginPageStyled >
        <Logo/>
        <LoginForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::before{
  content: "";
  background: url(${backgroundImage});
  background-size:cover;
  background-position: center;
  background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

}
`
export default LoginPage
