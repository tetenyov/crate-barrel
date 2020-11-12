import React, { useContext } from 'react'
import { DetailsContext } from '../../context/DetailsContext'

function ItemDimensions() {
  const dimensions = useContext(DetailsContext).dimensions
  const arrayOfDimensions = Object.entries(dimensions)

  const dimensionsList = arrayOfDimensions.length
    && arrayOfDimensions.map(([dimension, value], i) => (
      <li key={i}>
        { `${ dimension.firstLetterCaps() }: ${ value }` }
      </li>
    ))

  return (
    <div>
      <h6>Overall dimensions</h6>
      <ul>
        { dimensionsList }
      </ul>
    </div>
  )
}

export default ItemDimensions
