import React from 'react'
import useFetch from '../../hooks/useFetch'
import CardCountry from './CardCountry'

const CardsMain = () => {

    const countries = useFetch(`https://restcountries.com/v2/all`)

  return (
      <div className='card_container'>
{
    countries?.map(country => (
        <CardCountry 
        key={country.name}
        country={country}
        />

    ))
}

      </div>
  )
}

export default CardsMain