import axios from 'axios'
import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import '../Search/Search.css'

const Search = () => {

  const [search, setSearch] = useState('')

  useEffect(() => {
    let searchValue
    if (search === ''){
      countries
    } else {
      countries = search
    }
    const countries = useFetch(`https://restcountries.com/v2/name/${searchValue}`)

  }, [search])
  

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