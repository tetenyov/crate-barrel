import React, { useContext } from 'react'
import { DetailsContext } from '../../context/DetailsContext'

function ItemDetails() {
  const details = useContext(DetailsContext).details
  const detailsList = details.length 
    && details.map((feature, i) => (
      <li key={i}>
        { feature }
      </li>
    ))
    
  return (
    <ul>
      { detailsList }
    </ul>
  )
}

export default ItemDetails
