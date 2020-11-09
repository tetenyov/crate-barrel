import React from 'react'
import { connect } from 'react-redux'

function GoodsList(props) {
  console.log(props.goods)
  return (
    <ul>
      
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods.goodsList
  }
}

export default connect(mapStateToProps, null)(GoodsList)
