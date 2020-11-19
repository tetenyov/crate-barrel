import React, { useState } from 'react'

import ItemOverview from './ItemOverview'
import ItemDetails from './ItemDetails'
import ItemDimensions from './ItemDimensions'
import { getButtonClassName } from '../../util/util'

function ItemDescription() {
  const [displayed, setDisplayed] = useState('Overview')

  const displaySection = (section) => {
    const sectionToComponent = {
      Overview: <ItemOverview />,
      Details: <ItemDetails />,
      Dimensions: <ItemDimensions />
    }

    return sectionToComponent[section]
  }

  const buttonClickHandler = (evt) => setDisplayed(evt.target.textContent)

  return (
    <div>
      <ul className='current-item__details-list'>
        <li>
          <h5 >
            <button className={ getButtonClassName(displayed, 'Overview') } type='button'
              onClick={buttonClickHandler}
            >
              Overview
            </button>
          </h5>
        </li>
        <li>
          <h5>
            <button className={ getButtonClassName(displayed, 'Details') } type='button'
              onClick={buttonClickHandler}
            >
              Details
            </button>
          </h5>
        </li>
        <li>
          <h5>
            <button className={ getButtonClassName(displayed, 'Dimensions') } type='button'
              onClick={buttonClickHandler}
            >
              Dimensions
            </button>
          </h5>
        </li>
      </ul>
      { displaySection(displayed) }
    </div>
  )
}

export default ItemDescription