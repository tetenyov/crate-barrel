import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Item() {
  const goods = useSelector(state => state.goods.goodsList)
  const {pathname} = useLocation()
  const skuInPathname = pathname.match(/\d/g).join('')
  const currentItem = goods.find(item => item.sku.toString().includes(skuInPathname))

  return (
    <article>
      hello
    </article>
  )
}

export default Item
