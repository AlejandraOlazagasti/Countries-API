import React from 'react'
import ReactSwitch from 'react-switch'
import CardCountry from '../../components/CardCountry/CardCountry'
import Nav from '../../components/Nav/Nav'

const PrincipalPage = ({theme}) => {
    return (
        <div className={`App ${theme}`}>
            <Nav/>
            <h1>PrincipalPage</h1>
        </div>
    )
}

export default PrincipalPage