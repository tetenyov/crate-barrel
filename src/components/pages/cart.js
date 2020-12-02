import React from 'react'
import { useSelector } from 'react-redux'

import CartList from '../../components/cart/CartList'
import CartSummary from '../../components/cart/CartSummary'

function Cart() {
  const inCart = useSelector(state => state.cart.inCart)
  
  return (
    <section className='cart'>
      <div className='cart__wrapper'>
        <h2 className='cart__heading'>Cart</h2>
        <CartList />
        { !inCart.length 
            && 
              <p>Your cart is empty. It's high time to choose something.</p> 
        }
      </div>
      <CartSummary />
    </section>
  )
}

export default Cart
