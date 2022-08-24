import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import CardCountry from '../../components/CardCountry/CardCountry'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'
import './PrincipalPage.css'

const PrincipalPage = () => {
    const [theme, setTheme] = useState('light')

    return (
        <div className={`principal-container ${theme}`}>
            <Nav theme={theme} setTheme={setTheme}/>

            <CardsMain/>

            <h1>PrincipalPage</h1>
        </div>
    )
}

export default PrincipalPage