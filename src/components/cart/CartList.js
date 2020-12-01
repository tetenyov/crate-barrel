import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartItem from './CartItem'

function CartList() {
  const goods = JSON.parse(localStorage.getItem('goods'))
  let inCart = useSelector(state => state.cart.inCart)
  inCart = inCart.length 
    ? inCart
    : JSON.parse(localStorage.getItem('inCart'))
    
  useEffect(() => {
    if (inCart.length > 0) {
      localStorage.setItem('inCart', JSON.stringify(inCart))
    }
  }, [inCart])

  const goodsInCart = inCart
    ? goods.filter(item => inCart.includes(item.sku))
        .map(item => {
          return (
            <li className='cart-list__item' key={item.sku}>
              <CartItem item={item} inCart={inCart} />
            </li>
          ) 
        })
    : null

  return (
    <ul className='cart-list'>
      { goodsInCart }
    </ul>
  )
}

export default CartList
