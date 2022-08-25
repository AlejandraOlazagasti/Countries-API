import React, { useRef } from 'react'
import '../Filter/Filter.css'

const Filter = () => {
  const regionRef = useRef()

  return (
    <div className='filter'>
      <select ref={regionRef}>
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