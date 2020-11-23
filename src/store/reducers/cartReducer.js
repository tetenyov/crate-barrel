import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY } from '../../constants/action-types'

import { deleteFirstEqual, updateItemsInCart, getUpdatedCounter } from '../../util/util'

const initialCartState = {
  inCart: [],
  counter: 0
}

export default (state=initialCartState, action) => {
  const { type, payload, quantity } = action

  switch (type) {
    case ADD_TO_CART: 
      return {
        ...state,
        inCart: [ ...state.inCart, payload],
        counter: state.counter + 1
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        inCart: deleteFirstEqual(state.inCart, payload),
        counter: state.counter === 0 ? 0 : state.counter - 1
      }
     
    case UPDATE_QUANTITY:
      return {
        ...state,
        inCart: updateItemsInCart(state.inCart, payload, quantity),
        counter: getUpdatedCounter(state.inCart, payload, quantity)
      }
    default: return state
  }
}
