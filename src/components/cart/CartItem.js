import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateQuantity } from '../../store/action-creators/action-creators'
import ButtonRemove from './ButtonRemove'
import { getCounter } from '../../util/util'

function CartItem(props) {
  const [newQty, setNewQty] = useState(null)
  const dispatch = useDispatch()
  const { item, inCart } = props

  const getTotalItemPrice = (price, qty) => (price * qty).toLocaleString()
  const buttonUpdateClickHandler = () => dispatch(updateQuantity(item.sku, newQty))
  const inputQtyChangeHandler = (evt) => setNewQty(evt.target.value)

  return (
    <article className='cart-list__goods-item'>
      <header className='cart-list__header'>
        <div className='cart-list__wrapper-header'>
          <h3>{ item.name }</h3>
          <p>Sku { item.sku }</p>
        </div>
        <div className='cart-list__wrapper-header cart-list__wrapper-header--counter'>
          <p className='cart-list__wrapper-counter'>
            <input type='number' defaultValue={getCounter(item.sku, inCart)}
              onChange={inputQtyChangeHandler}
            />
            <button type='button'
              onClick={buttonUpdateClickHandler}
            >
              Update
            </button>
          </p>
          <p>Rub { item.price }</p>
        </div>
        <p>Rub { getTotalItemPrice(item.price, getCounter(item.sku, inCart)) }</p>
      </header>
      <section className='cart-list__image-section'>
        <div className='cart-list__wrapper-image'>
          <img className='cart-list__image' src={item.img[0]} />
          <p>{ item.ship }</p>
        </div>
        <ButtonRemove sku={item.sku}/>
      </section>
    </article>
  )
}

export default CartItem
 