import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import OrderPage2 from '../orderPage/OrderPage2';



function LoginForm() {
    //state
const [inputValue,setInputValue]= useState ("");
//comportement

const handleSubmit = (e)=>{
  e.preventDefault()
  alert(`"Bonjour ${inputValue}!"`)
  setInputValue("")
}

const handleChange = (e)=>{
  console.log(e.target.value)
  setInputValue(e.target.value)
  
}
  return (
    <form action="" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous!</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input required onChange={handleChange} value={inputValue} type="" placeholder="Entrer votre prénom" />
        <NavLink to='/order'>
          <button>Accéder à votre espace</button>
        </NavLink>
    </form>
  )
}

export default LoginForm