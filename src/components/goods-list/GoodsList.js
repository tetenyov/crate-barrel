import React from 'react'
import { useSelector } from 'react-redux'

import ListItem from './ListItem'

function GoodsList() {
  const goods = useSelector(state => state.goods.goodsList)
  const goodsList = goods.length && goods.map((item) => {
   
    return (
      <li className='goods-list__item' key={item.sku}>
        <ListItem 
          item={item}
        />
      </li> 
    )
  })

  return (
    <ul className='goods-list'>
      { goodsList }
    </ul>
  )
}

export default GoodsList
