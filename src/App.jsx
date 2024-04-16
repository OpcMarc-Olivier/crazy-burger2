import { useState } from 'react'
import LoginPage from './components/pages/loginPage/LoginPage'
import Orderpage from './components/pages/orderPage/Orderpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './components/pages/errorPage/ErrorPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/orderpage' element={<Orderpage/>} />
        <Route path='/errorpage' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
