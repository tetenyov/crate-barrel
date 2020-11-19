import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addToCart } from '../../store/action-creators/action-creators'
import { getCounter } from '../../util/util'

function ToCartButton(props) {
  const inCart = useSelector(state => state.cart.inCart)
  const dispatch = useDispatch()

  const buttonClickHandler = () => {
    dispatch(addToCart(props.sku))
  }

  return (
    <p>
      <span className='current-item__counter'>{ getCounter(props.sku, inCart) }</span>
      <button 
        className='current-item__to-cart' type='button'
        onClick={buttonClickHandler}
      >
        Add to cart
      </button>
    </p>
  )
}

export default ToCartButton
