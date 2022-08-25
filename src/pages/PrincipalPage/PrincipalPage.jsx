
import React, { useState, useEffect } from 'react'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'
import './PrincipalPage.css'


const PrincipalPage = () => {
    const [theme, setTheme] = useState('light')

    return (

        <div className={`principal-container ${theme}`}>
            <Nav theme={theme} setTheme={setTheme}/>
            <CardsMain/>


        </div>
    )
}

export default PrincipalPage