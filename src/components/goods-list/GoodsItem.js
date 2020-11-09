import React, { Fragment } from 'react'

function GoodsItem(props) {
  return (
    <Fragment>
      <img src={props.src}/>
      {
        props.newArrival 
          && <p>New Arrival</p>
      }
      <h3>{ props.name }</h3>
    <p>{`Rub ${props.price}`}</p>
    </Fragment>
  )
}

export default GoodsItem