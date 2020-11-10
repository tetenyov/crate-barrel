import React, { Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function ListItem(props) {
  const { item } = props
  const { pathname } = useLocation();

  return (
    <Fragment>
      <NavLink to={`${pathname}/s${item.sku}`}>
          <img src={item.img[0]}/>
      </NavLink>
    
      {
        item.newArrival 
          && <p>New Arrival</p>
      }
      <h3>{ item.name }</h3>
      <p>{`Rub ${item.price}`}</p>
    </Fragment>
  )
}

export default ListItem