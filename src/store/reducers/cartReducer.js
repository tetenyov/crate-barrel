import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, DELETE_FROM_CART } from '../../constants/action-types'

import { deleteFirstEqual, updateItemsInCart, getUpdatedCounter } from '../../util/util'

const initialCartState = {
  inCart: [],

}

export default (state=initialCartState, action) => {
  const { type, payload, quantity } = action

  switch (type) {
    case INCREMENT_QUANTITY: 
      return {
        ...state,
        inCart: payload,
        
      }

    case DECREMENT_QUANTITY:
      return {
        ...state,
        inCart: deleteFirstEqual(state.inCart, payload),
        // counter: state.counter === 0 ? 0 : state.counter - 1
      }
     
    case UPDATE_QUANTITY:
      return {
        ...state,
        inCart: updateItemsInCart(state.inCart, payload, quantity),
        // counter: getUpdatedCounter(state.inCart, payload, quantity)
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        inCart: updateItemsInCart(state.inCart, payload, 0),
        // counter: getUpdatedCounter(state.inCart, payload, 0)
      }
    
    default: return state
  }
}
