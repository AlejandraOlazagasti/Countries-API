import React, { useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import '../Search/Search.css'

const Search = ({setUrl}) => {

  const searchCountries = () => {
    setUrl(`https://restcountries.com/v2/name/${search.value}`)
  }

  

  return (
    <div className='search '>
      <div className='search__input input'>
        <i className='bx bx-search-alt-2'></i>
        <input 
          type='text'
          placeholder='Search for Country'
          id='search'
          onChange={searchCountries}
        />
      </div>
    </div>
  )
}

export default Search