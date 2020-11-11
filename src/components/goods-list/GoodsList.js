import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import ListItem from './ListItem'

function GoodsList() {
  let goods = useSelector(state => state.goods.goodsList)
  goods = goods.length 
    ? goods
    : JSON.parse(sessionStorage.getItem('goods'))
    
  useEffect(() => {
    sessionStorage.setItem('goods', JSON.stringify(goods))
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
