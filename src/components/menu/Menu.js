import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to=''>
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

export default Menu
