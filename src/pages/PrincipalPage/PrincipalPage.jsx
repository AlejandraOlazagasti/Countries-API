
import React, { useState } from 'react'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'
import './PrincipalPage.css'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'


const PrincipalPage = () => {
    const [theme, setTheme] = useState('light')

    return (

        <div className={`principal-container ${theme}`}>

            <Nav theme={theme} setTheme={setTheme}/>
            <div className='principal__filters'>
                <Search/>
                <Filter/>
            </div>
            <CardsMain/>


        </div>
    )
}

export default PrincipalPage