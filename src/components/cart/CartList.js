import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartItem from './CartItem'

function CartList() {
  const goods = JSON.parse(localStorage.getItem('goods'))
  const inCart = useSelector(state => state.cart.inCart)
  
  const goodsInCart = inCart.length
    ? goods.filter(item => inCart.includes(item.sku))
        .map(item => {
          return <li key={item.sku}><CartItem item={item} /></li>
        })
    : null

  return (
    <ul className='cart-list'>
      { goodsInCart }
    </ul>
  )
}

export default CartList
