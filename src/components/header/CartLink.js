import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import cartSVG from '../../icons/Icons.svg'

function CartLink() {
  let itemsInCart = useSelector(state => state.cart.inCart)
  
  if (!JSON.parse(localStorage.getItem('inCart'))) {
    itemsInCart = []

  } else if (!itemsInCart.length) {

    itemsInCart = JSON.parse(localStorage.getItem('inCart'))
  }

  return (
    <NavLink className='page-header__cart-link' to='/checkout/cart' >
      <svg className='page-header__cart-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <use xlinkHref={`${cartSVG}#icon-cart`} />
      </svg>
      <span className='page-header__cart-counter'>{ itemsInCart.length }</span>
    </NavLink>
  )
}

export default CartLink
