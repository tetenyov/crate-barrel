import React from 'react'
import { Route } from 'react-router-dom'

import GoodsList from '../goods-list/GoodsList'



function vases() {
  return (
    <section className='vases-page'>
      <h2 className='vases-page__heading'>Vases</h2>
      <GoodsList />
     
    </section>
  )
}

export default vases
