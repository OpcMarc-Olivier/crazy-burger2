import React, { useState } from 'react'

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
        <h1>Bienvenue chez nous</h1>
        <br />
        <h2>Connectez-vous!</h2>
        <input required onChange={handleChange} value={inputValue} type="" placeholder="Entrer votre prénom" /><button>Accéder à voter espace</button>
    </form>
  )
}

export default LoginForm