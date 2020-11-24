import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrQuantity, decrQuantity } from '../../store/action-creators/action-creators'
import { getCounter } from '../../util/util'

function ToCartButton(props) {
  const inCart = useSelector(state => state.cart.inCart)
  const dispatch = useDispatch()

  const buttonAddClickHandler = () => {
    // localStorage[`${props.sku}InCart`] = (+localStorage[`${props.sku}InCart`] + 1).toString()
    dispatch(incrQuantity(props.sku))
  } 

  const buttonDeleteClickHandler = () => {
    dispatch(decrQuantity(props.sku))
  }

  // useEffect(() => {
  //   localStorage.setItem(`${props.sku}InCart`, '') 
  // }, [])

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
