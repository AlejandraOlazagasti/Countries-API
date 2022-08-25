import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'


const Nav = () => {

  return (
    <section className='Nav'>
      <Link to={'/'}>
        <button className=''>Back to Start</button>
      </Link>
      <h1 className='Nav__title'>Where in the world?</h1>
      <div className='Nav__dark'>
        <button className='Nav__btn'><i class='bx bx-moon'></i></button>
        <h2 className='Nav__dark__title'> Dark Mode</h2>
      </div>
    </section>
  )
}

export default Nav