
import React, { useState, useEffect } from 'react'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'
import './PrincipalPage.css'
import Filter from '../../components/Filter/Filter'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import ActionsMenu from '../../components/ActionsMenu/ActionsMenu'


const PrincipalPage = () => {
    const [theme, setTheme] = useState('')
    const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`)
    const [regions, setRegions] = useState()

    const countries = useFetch(url)

    useEffect(() => {
        axios.get(url)
            .then(res => setRegions(res.data))
            .catch(err => console.log(err))
    }, [])

    let regionsList = []

    regions?.map(country => {
        if (regionsList.includes(country.region) == false) {
            regionsList.push(country.region)
        }
    })

    return (
        <div className={`principal-container ${theme}`}>
            <Nav theme={theme} setTheme={setTheme} />
            <ActionsMenu regionsList={regionsList} setUrl={setUrl}/>
            <CardsMain countries={countries} />
        </div>
    )
}

export default PrincipalPage