import React from 'react'
import CardsMain from '../../components/CardCountry/CardsMain'
import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import '../PrincipalPage/PrincipalPage.css'

const PrincipalPage = () => {

    return (
        <div className='principal-container'>
            <header>
                <Nav/>
            </header>
            <body className='principal__body'>
                <div className='principal__inputs'>
                    <Search/>
                    <Filter/>
                </div>
                <CardsMain/>
            </body>
        </div>
    )
}

export default PrincipalPage