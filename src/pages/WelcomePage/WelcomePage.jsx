import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../WelcomePage/WelcomePage.css'

const WelcomePage = () => {

  const homeBrowser = useNavigate();

  const handleGoHome = () => {
    homeBrowser('/countries')
  }




  return (
    <div className='welcome-container'>
      <div className='welcome__world'>
      <button className='welcome__button' onClick={handleGoHome}>Let´s GO!</button>
      </div>
    </div>
  )
}

export default WelcomePage