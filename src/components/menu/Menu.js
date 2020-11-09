import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadVases } from '../../store/action-creators/action-creators'

function Menu(props) {
  const { loadVases } = props
  
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to='/vases' onClick={() => loadVases()}>
            Vases
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Botanicals
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Objects
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Electronics & Tech
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Bowls & Trays
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Fireplaces
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Pet accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default connect(null, {loadVases})(Menu)
