import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { DetailsContext } from '../../context/DetailsContext'

import PreviewsList from '../common/PreviewsList'
import ItemDescription from './ItemDescription'

function Item() {
  const goods = useSelector(state => state.goods.goodsList)
  const {pathname} = useLocation()
  const skuInPathname = pathname.match(/\d/g).join('')

  let currentItem = goods.find(item => item.sku.toString().includes(skuInPathname))
  currentItem = currentItem // после обновления страницы currentItem undefined, поэтому сохраняем в storage и потом делаем такую проверку
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
          <PreviewsList images={currentItem.img}/>
        </section>
        <section className='current-item__details'>
          <h4 className='current-item__details-heading'>Details of the item</h4> 
          <div>
            <h5>Ship</h5>
            <p>{currentItem.ship}</p>
          </div>
          <DetailsContext.Provider value={currentItem}>
             <ItemDescription />
          </DetailsContext.Provider>
        </section>
      </div>
    </article>
  )
}

export default Item
