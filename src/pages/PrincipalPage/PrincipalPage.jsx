import React from 'react'
import ReactSwitch from 'react-switch'
import CardCountry from '../../components/CardCountry/CardCountry'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'


const PrincipalPage = () => {

  

    return (
        <div className='principal-container'>
            <Nav/>

            <CardsMain/>

            <h1>PrincipalPage</h1>
        </div>
    )
}

export default PrincipalPage