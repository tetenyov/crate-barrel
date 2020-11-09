import React from 'react'
import { useSelector } from 'react-redux'

import GoodsItem from './GoodsItem'

function GoodsList() {
  const goods = useSelector(state => state.goods.goodsList)
  const goodsList = goods.length && goods.map((item) => {
    const { name, price, newArrival, img, sku } = item
    return (
      <li key={sku}>
        <GoodsItem 
          name={name}
          price={price}
          newArrival={newArrival}
          src={img[0]}
        />
      </li> 
    )
  })

  return (
    <ul>
      { goodsList }
    </ul>
  )
}

export default GoodsList
