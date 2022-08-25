import React, { useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import '../Search/Search.css'

const Search = () => {

  const countriesInputRef = useRef()

  const countries = useFetch(`https://restcountries.com/v2/all`)
  // const countries = useFetch(`https://restcountries.com/v2/name/${searchValue}`)
  

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value

    if (searchValue.thin()) {
      countries
    }
  }

  return (
    <div className='search'>
      <div className='search__input'>
        <i class='bx bx-search-alt-2'></i>
        <input 
          type='text'
          placeholder='Search for Country'
          ref={countriesInputRef}
          onChange={searchCountries}
        />
      </div>
    </div>
  )
}

export default Search