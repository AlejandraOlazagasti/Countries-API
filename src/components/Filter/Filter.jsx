import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import '../Filter/Filter.css'

const Filter = ({ setUrl, regionsList }) => {
  const regionRef = useRef()


  const showCountry = region => setUrl(`https://restcountries.com/v3.1/region/${region}`)

  return (
    <div className='filter input'>
      <select ref={regionRef}>
        <option onClick={() => setUrl(`https://restcountries.com/v3.1/all`)}>All</option>
        {regionsList != [] && regionsList.map(region => <option onClick={() => showCountry(region)} key={region}>{region}</option>)}
  
      </select>
    </div>
  )
}

export default Filter