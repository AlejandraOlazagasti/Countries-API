
import React, { useState } from 'react'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'
import './PrincipalPage.css'
import Filter from '../../components/Filter/Filter'
import useFetch from '../../hooks/useFetch'


const PrincipalPage = () => {
    const [theme, setTheme] = useState('')
    const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`)

    const countries = useFetch(url)

    const regions = useFetch(url)


    let regionsList = []

    regions?.map(country => {
     if(regionsList.includes(country.region) == false) {
        regionsList.push(country.region)
     }
    })
    console.log(regionsList)

    return (


        <div className={`principal-container ${theme}`}>
            {/* <Nav theme={theme} setTheme={setTheme}/> */}
            <Filter countries={countries} setUrl={setUrl} regionsList={regionsList}/>
            <CardsMain countries={countries}/>
        </div>
    )
}

export default PrincipalPage