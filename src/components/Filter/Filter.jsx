import React from 'react'
import '../Filter/Filter.css'

const Filter = () => {
  return (
    <div className='filter'>
      <select>
        <option>All</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  )
}

export default Filter