import React, { Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function ListItem(props) {
  const { item } = props
  const { pathname } = useLocation();

  return (
    <Fragment>
      <NavLink to={`${pathname}/s${item.sku}`}>
          <img className='goods-list__image' src={item.img[0]}/>
      </NavLink>
      {
        item.newArrival 
          && <p className='goods-list__new'>New Arrival</p>
      }
      <NavLink to={`${pathname}/s${item.sku}`}>
        <h3 className='goods-list__heading'>{ item.name }</h3>
      </NavLink>
      <p className='goods-list__price'>
        {`Rub ${item.price.toLocaleString()}`}
      </p>
    </Fragment>
  )
}

export default ListItem