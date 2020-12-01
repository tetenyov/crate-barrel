import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './ListItem'

function GoodsList() {
  let goods = useSelector(state => state.goods.goodsList)
  console.log(goods)

  goods = goods && goods.length
  ? goods
  : JSON.parse(localStorage.getItem('goods'))

  useEffect(() => {
    localStorage.setItem('goods', JSON.stringify(goods))
  }, [])
  
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
