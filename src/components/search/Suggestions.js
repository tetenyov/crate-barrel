import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getMatchingGoods } from '../../util/util'
import { MIN_QUERY_LENGTH } from '../../constants/constants'

function Suggestions(props) {
  const goods = useSelector(state => state.goods.goodsList)
  const matchedGoodsList = getMatchingGoods(goods, props.query)

  const suggestionsList = matchedGoodsList 
    && matchedGoodsList.map(item => {
      return (
        <li className='suggestions-list__item' key={item.sku.toString()}>
          <NavLink to={`/${item.category}/s${item.sku}`}>
            <h4 className='suggestions-list__heading'>{item.name}</h4>
            <img className='suggestions-list__image' src={item.img[0]} />
          </NavLink>
        </li>
      )
    })

  return (
    <Fragment>
      {
        props.query.length > MIN_QUERY_LENGTH
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
