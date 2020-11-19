import React, { useContext } from 'react'
import { DetailsContext } from '../../context/DetailsContext'

import { getFirstLetterCaps } from '../../util/util'

function ItemDimensions() {
  const dimensions = useContext(DetailsContext).dimensions
  const arrayOfDimensions = Object.entries(dimensions)

  const dimensionsList = arrayOfDimensions.length
    && arrayOfDimensions.map(([dimension, value], i) => (
      <li className='dimensions-list__item' key={i}>
        { `${ getFirstLetterCaps(dimension) }: ${ value }` }
      </li>
    ))

  return (
    <div>
      <h6 className='current-item__dimensions-heading'>Overall dimensions</h6>
      <ul className='dimensions-list'>
        { dimensionsList }
      </ul>
    </div>
  )
}

export default ItemDimensions
