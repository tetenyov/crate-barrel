import React from 'react'
import { NavLink } from 'react-router-dom'

import './style/navigation.scss'

function Menu() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to=''>
            Furniture
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Outdoor
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Tabletop & Bar
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Kitchen
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Decor
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Rugs
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Lightning
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to=''>
            Bed & Bath
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
