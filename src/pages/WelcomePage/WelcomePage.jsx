import React from 'react'
import { Link } from 'react-router-dom'
import '../WelcomePage/WelcomePage.css'

const WelcomePage = () => {
  return (
    <div className='welcome-container'>
      <div className='welcome__world'>

      </div>
      <Link to={'/countries'}>
        <button>Let´s search your country</button>
      </Link>
    </div>
  )
}

export default WelcomePage