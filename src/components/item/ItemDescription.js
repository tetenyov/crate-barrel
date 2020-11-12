import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import ItemOverview from './ItemOverview'
import ItemDetails from './ItemDetails'
import ItemDimensions from './ItemDimensions'

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

  const sectionClickHandler = (evt) => setDisplayed(evt.target.textContent)


  return (
    <div>
      <ul>
        <li>
          <NavLink to='#' onClick={sectionClickHandler}>
            <h5>Overview</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to='#' onClick={sectionClickHandler}>
            <h5>Details</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to='#' onClick={sectionClickHandler}>
            <h5>Dimensions</h5>
          </NavLink>  
        </li>
      </ul>
      { displaySection(displayed) }
    </div>
  )
}

export default ItemDescription