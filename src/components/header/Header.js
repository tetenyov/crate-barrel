import React from 'react'
import { NavLink } from 'react-router-dom'

import Search from '../search/Search'
import CartLink from '../cart/CartLink'
import Menu from '../menu/Menu'

function Header() {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper'>
        <Search />
        <NavLink to='/' className='page-header__logo'>
          <img className='page-header__logo-image' src='/img/crate_and_barrel_logo.jpg' />
        </NavLink>
        <CartLink />
      </div>
      <Menu />
    </header>
  )
}

export default Header
