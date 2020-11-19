import React, { useContext } from 'react'
import { DetailsContext } from '../../context/DetailsContext'

function ItemOverview() {
  const overview = useContext(DetailsContext).overview

  return (
    <p className='current-item__details-overview'>
      { overview }
    </p>
  )
}

export default ItemOverview
