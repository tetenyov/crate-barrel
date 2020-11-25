import React from 'react'
import { NavLink } from 'react-router-dom'

function CartSummary() {
  return (
    <div className='summary'>
      <h3 className='summary__heading'>Cart Summary</h3>
      <div className='summary__wrapper'>
        <p>Est. Order Total</p>
        <p>Rub<span>4500</span></p>
      </div>
      <NavLink className='summary__checkout-link' to=''>
        Checkout now
      </NavLink>
      <p className='summary__privacy'>
        By continuing to checkout, you are agreeing to our Terms of Use and Privacy Policy.
      </p>
    </div>
  )
}

export default CartSummary
