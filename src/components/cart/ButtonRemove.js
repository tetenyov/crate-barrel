import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteFromCart } from '../../store/action-creators/action-creators'
import { updateItemsInCart } from '../../util/util'

function ButtonRemove(props) {
  const dispatch = useDispatch()

  const buttonDeleteClickHandler = () => {
    const goodsInStorage = JSON.parse(localStorage.getItem('inCart'))
    const goodsInStorageUpdated = updateItemsInCart(goodsInStorage, props.sku, 0)
    localStorage.setItem('inCart', JSON.stringify(goodsInStorageUpdated))
    
    dispatch(deleteFromCart(props.sku))
  } 

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
