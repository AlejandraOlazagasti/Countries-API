import React from 'react'

import '../CardCountry/CardCountry.css'

const CardCountry = ({ country }) => {

  return (

    <div>

      <div className='card' >
        <div className="card__img">
          <img src={country.flags.svg} alt="" />
        </div>
        <div className="card__title">
          <h2>{country.name.official}</h2>
        </div>
        <div className="card__description">
          <span>Population:</span> {country.population}
          <br />
          <span>Region:</span> {country.region}
          <br />
          <span>Capital:</span> {country.capital}
        </div>
      </div>


    </div>


  )
}

export default CardCountry