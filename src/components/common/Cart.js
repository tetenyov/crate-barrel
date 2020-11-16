import React from 'react'
import { NavLink } from 'react-router-dom'

import cartSVG from '../../icons/Icons.svg'

function Cart() {
  return (
    <div className='page-header__cart-wrapper'>
      <NavLink className='page-header__cart-link' to='' >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <use xlinkHref={`${cartSVG}#icon-cart`} />
        </svg>
      </NavLink>
      <span>0</span>
    </div>
  )
}

export default Cart
