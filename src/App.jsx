import React, {useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PrincipalPage from './pages/PrincipalPage/PrincipalPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'

function App() {

  const [theme, setTheme] = useState('dark')

  return (
    <Routes>
      <Route path='/' element={<WelcomePage theme={theme} />} />
      <Route path='/countries' element={<PrincipalPage theme={theme} />} />
    </Routes>
  )
}

export default App
