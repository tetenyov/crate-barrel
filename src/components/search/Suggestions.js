import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getMatchingGoods } from '../../util/util'
import { MIN_QUERY_LENGTH } from '../../constants/constants'

function Suggestions(props) {
  let goods = useSelector(state => state.goods.goodsList)
    goods = goods 
      ? goods
      : JSON.parse(localStorage.getItem('goods'))

  const matchedGoodsList = getMatchingGoods(goods, props.query)

  useEffect(() => {
    if (!localStorage.goods) {
      localStorage.setItem('goods', JSON.stringify(goods))
    }
  }, [goods])

  const suggestionsList = matchedGoodsList 
    && matchedGoodsList.map(item => {
      return (
        <li className='suggestions-list__item' key={item.sku.toString()}>
          <NavLink className='suggestions-list__link' to={`/${item.category}/s${item.sku}`}>
            <h4 className='suggestions-list__heading'>{item.name}</h4>
            <img className='suggestions-list__image' src={item.img[0]} />
          </NavLink>
        </li>
      )
    })

  return (
    <Fragment>
      {
        !!matchedGoodsList.length
          && (
            <section className='suggestions'>
              <h3 className='suggestions__heading'>
                Product suggestions
              </h3>
              <ul className='suggestions-list'>
                { suggestionsList }
              </ul>
            </section>
          ) 
      }
    </Fragment>
    
  )
}

export default Suggestions
