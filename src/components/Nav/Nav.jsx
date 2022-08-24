import React from 'react'

import './Nav.css'


const Nav = ({theme, setTheme}) => {


  const handleTheme = () => {
    if(theme === 'ligth'){
      setTheme('dark')
    }else{
      setTheme('ligth')
    }
  }

  return (
    <section className='Nav'>
      <h1 className='Nav__title'>Where in the world?</h1>
      <div onClick={handleTheme} className='Nav__dark'>
        <button className='Nav__btn'><i className='bx bx-moon'/> <span>Dark Mode</span></button>
      </div>
    </section>
  )
}

export default Nav