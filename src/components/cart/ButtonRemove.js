import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteFromCart } from '../../store/action-creators/action-creators'

function ButtonRemove(props) {
  const dispatch = useDispatch()

  const buttonDeleteClickHandler = () => dispatch(deleteFromCart(props.sku))

  return (
    <div className='cart-list__wrapper-remove'>
      <button className='cart-list__remove-button' type='button'
        onClick={buttonDeleteClickHandler}
      >
        Remove
      </button>
    </div>

  )
}

export default ButtonRemove
