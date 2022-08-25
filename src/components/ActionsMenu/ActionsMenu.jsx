import React from 'react'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import './ActionsMenu.css'

const ActionsMenu = ({countries, setUrl, regionsList}) => {
  return (
    <div className='actions__menu'>
        <Search setUrl={setUrl}/>
        <Filter countries={countries} setUrl={setUrl} regionsList={regionsList} />
    </div>
  )
}

export default ActionsMenu