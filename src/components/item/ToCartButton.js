import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrQuantity, decrQuantity } from '../../store/action-creators/action-creators'
import { getCounter } from '../../util/util'

function ToCartButton(props) {
  let inCart = useSelector(state => state.cart.inCart)
  inCart = inCart.length
    ? inCart
    : JSON.parse(localStorage.getItem('inCart'))

  const dispatch = useDispatch()
  const buttonAddClickHandler = () => dispatch(incrQuantity(props.sku))

  const buttonDeleteClickHandler = () => {
    if (!inCart.length) return 
    dispatch(decrQuantity(props.sku))
  }
  
  return (
    <p>
      <button 
        className='current-item__delete-from-cart' type='button'
        onClick={buttonDeleteClickHandler}
      >
        delete
      </button>
      <span className='current-item__counter'>
        { getCounter(props.sku, inCart) }
      </span>
      <button 
        className='current-item__to-cart' type='button'
        onClick={buttonAddClickHandler}
      >
        Add to cart
      </button>
    </p>
  )
}

export default ToCartButton
