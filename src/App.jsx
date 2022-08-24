import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PrincipalPage from './pages/PrincipalPage/PrincipalPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<PrincipalPage />} />
    </Routes>
  )
}

export default App
