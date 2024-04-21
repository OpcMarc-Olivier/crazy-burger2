import React, { useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom';




function LoginForm() {
    //state
const [inputValue,setInputValue]= useState ("");
const navigate = useNavigate ()
//comportement

const handleSubmit = (e)=>{
  e.preventDefault()
  
  setInputValue("")
  navigate(`order/${inputValue}`)
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
        <button>Accéder à votre espace</button>
    </form>
  )
}

export default LoginForm
