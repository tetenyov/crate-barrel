import React, { useContext } from 'react'
import { DetailsContext } from '../../context/DetailsContext'

function ItemDetails() {
  const details = useContext(DetailsContext).details
  
  const detailsList = details.length 
    && details.map((feature, i) => (
      <li className='details-list__item' key={i}>
        { feature }
      </li>
    ))
    
  return (
    <ul className='details-list'>
      { detailsList }
    </ul>
  )
}

export default ItemDetails
