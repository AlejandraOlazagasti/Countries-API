import React from 'react'
import '../Search/Search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className='search__input'>
        <i class='bx bx-search-alt-2'></i>
        <input 
          onChange={e => {
            setPage(1)
            setSearch(e.target.value)
          }} 
          type='text'
          placeholder='Search for Country'
        />
      </div>
    </div>
  )
}

export default Search