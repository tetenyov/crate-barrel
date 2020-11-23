import React from 'react'

import CartList from '../../components/cart/CartList'
import CartSummary from '../../components/cart/CartSummary'

function cart() {
  return (
    <section className='cart'>
      <div className='cart__wrapper'>
        <h2 className='cart__heading'>Cart</h2>
        <CartList />
      </div>
      <CartSummary />
    </section>
  )
}

export default cart
