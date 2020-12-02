import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getOrderTotal } from '../../util/util'

function CartSummary() {
  let goods = useSelector(state => state.goods.goodsList)
  goods = goods && goods.length
  ? goods
  : JSON.parse(localStorage.getItem('goods'))
  
  let goodsInCart = useSelector(state => state.cart.inCart)
  goodsInCart = goodsInCart.length
    ? goodsInCart
    : JSON.parse(localStorage.getItem('inCart'))

  return (
    <div className='summary'>
      <h3 className='summary__heading'>Cart Summary</h3>
      <div className='summary__wrapper'>
        <p>Est. Order Total</p>
        <p>Rub<span>{` ${getOrderTotal(goods, goodsInCart)}`}</span></p>
      </div>
      <NavLink className='summary__checkout-link' to=''>
        Checkout now
      </NavLink>
      <p className='summary__privacy'>
        By&nbsp;continuing to&nbsp;checkout, you are agreeing 
        to&nbsp;our Terms of&nbsp;Use and Privacy Policy.
      </p>
    </div>
  )
}

export default CartSummary
