import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import PreviewList from '../common/PreviewList'

function Item() {
  const goods = useSelector(state => state.goods.goodsList)
  const {pathname} = useLocation()
  const skuInPathname = pathname.match(/\d/g).join('')

  let currentItem = goods.find(item => item.sku.toString().includes(skuInPathname))
  currentItem = currentItem 
    ? currentItem
    : JSON.parse(localStorage.getItem('currentItem'))

  useEffect(() => {
    localStorage.setItem('currentItem', JSON.stringify(currentItem))
  }, [])

  return (
    <article className='current-item'>
      <div className='current-item__wrapper-upper'>
        <h3>{ currentItem.name }</h3>
        { currentItem.exclusive && <p>Crate and Barrel Exclusive</p> }
      </div>
      <div className='current-item__wrapper-lower'>
        <section className='current-item__images'>
          <h4 className='current-item__images-heading'>Images of the item</h4>
          <img src={currentItem.img[0]} />
          <PreviewList images={currentItem.img}/>
        </section>
        
      </div>
    </article>
  )
}

export default Item
