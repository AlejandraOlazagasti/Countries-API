import React from 'react'
import ReactSwitch from 'react-switch'
import CardCountry from '../../components/CardCountry/CardCountry'
import Nav from '../../components/Nav/Nav'

const PrincipalPage = () => {
    return (
        <div>
            <Nav/>
            {/* <ReactSwitch/> */}
            <CardCountry/>
            <h1>PrincipalPage</h1>
        </div>
    )
}

export default PrincipalPage