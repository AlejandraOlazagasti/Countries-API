import React from 'react'
import CardCountry from './CardCountry'

const CardsMain = ({countries}) => {
   

  return (
      <div className='card_container'>
        
{
    countries?.map(country => (
        <CardCountry 
        key={country.name.official}
        country={country}
        />

    ))
}

      </div>
  )
}

export default CardsMain