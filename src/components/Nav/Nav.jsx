import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'


const Nav = ({ theme, setTheme }) => {


  const handleTheme = () => {
    if (theme === 'ligth') {
      setTheme('dark')
    } else {
      setTheme('ligth')
    }
  }

  const backPageRedirect = useNavigate();

  const handleBackPage = () => {
    backPageRedirect(-1)
  }


  return (
    <section className='Nav'>
      <button onClick={handleBackPage} className='Nav__btn'><i class='bx bx-arrow-back'></i>Go Back</button>
      <h1 className='Nav__title'>Where in the world?</h1>
      <div onClick={handleTheme} className='Nav__dark'>
        <button className='Nav__btn'><i className='bx bx-moon' /> <span>Dark Mode</span></button>
      </div>
    </section>
  )
}

export default Nav