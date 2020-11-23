import React, { Fragment } from 'react'

function CartItem(props) {
  const { item, key } = props

  return (
    <article>
      <header>
        <div>
          <h3>{ item.name }</h3>
          <p>Sku { item.sku }</p>
        </div>
        <div>
          <span></span>
          <p>Rub { item.price }</p>
        </div>

      </header>
      <section>
        <div>
          <img src={item.img[0]} />
          <p>{ item.ship }</p>
        </div>
        {/* <ButtonRemove /> */}
      </section>
    </article>
  )
}

export default CartItem
 