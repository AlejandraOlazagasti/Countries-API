import React from 'react'
import './Nav.css'

const Nav = () => {

  return (
    <section className='Nav'>
      <h1 className='Nav__title'>Where in the world?</h1>
      <div className='Nav__dark'>
        <button className='Nav__btn'><i class='bx bx-moon'></i></button>
        <h2 className='Nav__dark__title'> Dark Mode</h2>
      </div>
    </section>
  )
}

export default Nav