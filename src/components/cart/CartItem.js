import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { updateQuantity } from '../../store/action-creators/action-creators'
import { getCounter } from '../../util/util'
import ButtonRemove from './ButtonRemove'

function CartItem(props) {
  const [quantity, setQuantity] = useState(null)
  const dispatch = useDispatch()
  const { item, inCart } = props

  const getTotalItemPrice = (price, qty) => (price * qty).toLocaleString()
  const inputQtyChangeHandler = (evt) => setQuantity(evt.target.value)
  const buttonUpdateClickHandler = () => dispatch(updateQuantity(item.sku, quantity))

  useEffect(() => {
    setQuantity(getCounter(item.sku, inCart))
  }, [getCounter(item.sku, inCart)])

  return (
    <article className='cart-list__goods-item'>
      <header className='cart-list__header'>
        <div className='cart-list__wrapper-header'>
          <h3 className='cart-list__heading'>{ item.name }</h3>
          <p>Sku { item.sku }</p>
        </div>
        <div className='cart-list__wrapper-header cart-list__wrapper-header--counter'>
          <p className='cart-list__wrapper-counter'>
            <input type='text' defaultValue={getCounter(item.sku, inCart)}
              onChange={inputQtyChangeHandler}
            />
            <button type='button'
              onClick={buttonUpdateClickHandler}
            >
              Update
            </button>
          </p>
          <p>Rub { item.price.toLocaleString() }</p>
        </div>
        <p className='cart-list__header-total-price'>
          Rub { getTotalItemPrice(item.price, getCounter(item.sku, inCart)) }
        </p>
      </header>
      <section className='cart-list__image-section'>
        <div className='cart-list__wrapper-image'>
          <img className='cart-list__image' src={item.img[0]} />
          <p className='cart-list__image-ship'>{ item.ship }</p>
        </div>
        <ButtonRemove sku={item.sku}/>
      </section>
    </article>
  )
}

export default CartItem
 