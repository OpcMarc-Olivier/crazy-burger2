import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/loginPage/LoginPage'
import OrderPage2 from './components/pages/orderPage/OrderPage2'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/order' element={<OrderPage2 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
