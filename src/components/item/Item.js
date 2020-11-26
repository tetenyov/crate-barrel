import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { DetailsContext } from '../../context/DetailsContext'

import PreviewsList from './PreviewsList'
import ItemDescription from './ItemDescription'
import ToCartButton from './ToCartButton'

function Item() {
  let goods = useSelector(state => state.goods.goodsList)
  goods = goods && goods.length // после обновления страницы goods пуст, поэтому такую проверку и если товаров нет, берем их из storage
    ? goods
    : JSON.parse(localStorage.getItem('goods'))
  
  const { pathname } = useLocation()
  const skuInPathname = pathname.match(/\d/g).join('')
  
  let currentItem = goods.find(item => item.sku.toString().includes(skuInPathname))
  currentItem = currentItem // после обновления страницы currentItem undefined, поэтому сохраняем в storage и потом делаем такую проверку
  ? currentItem
  : JSON.parse(localStorage.getItem('currentItem'))
  
  const [imageMain, setImageMain] = useState(currentItem.img[0])
  const getImageMain = (src) => setImageMain(src)

  useEffect(() => {
    setImageMain(currentItem.img[0])
  }, [currentItem.img[0]])

  useEffect(() => {
    localStorage.setItem('currentItem', JSON.stringify(currentItem))
  }, [])

  return (
    <article className='current-item'>
      <div className='current-item__wrapper-upper'>
        <div className=''>
          <h3 className='current-item__heading'>{ currentItem.name }</h3>
          { 
            currentItem.exclusive && 
              <p className='current-item__exclusive'>Crate and Barrel Exclusive</p> 
          }
        </div>
        <div className=''>
          <p className='current-item__price'>
            Rub 
            <span> { currentItem.price.toLocaleString() }</span>
          </p>
          <p className='current-item__sku'>
            Sku: 
            <span> {currentItem.sku}</span>
          </p>
          <ToCartButton sku={currentItem.sku}/>
        </div>
      </div>
      <div className='current-item__wrapper-lower'>
        <section className='current-item__images'>
          <h4 className='visually-hidden'>Images of the item</h4>
          <img className='current-item__image-main' src={imageMain} />
          <PreviewsList 
            getImageMain={getImageMain}
            imageMain={imageMain}
            images={currentItem.img}
          />
        </section>
        <section className='current-item__details'>
          <h4 className='visually-hidden'>Details of the item</h4> 
          <div className='current-item__details-wrapper'>
            <h5 className='current-item__ship-heading'>Ship</h5>
            <p className='current-item__ship-text'>{currentItem.ship}</p>
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
