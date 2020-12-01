import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, DELETE_FROM_CART } from '../../constants/action-types'

import { deleteFirstEqual, updateItemsInCart, getUpdatedCounter } from '../../util/util'

const initialCartState = {
  inCart: [],

}

export default (state=initialCartState, action) => {
  const { type, payload } = action

  switch (type) {
    case INCREMENT_QUANTITY: 
      return {
        ...state,
        inCart: payload
      }

    case DECREMENT_QUANTITY:
      return {
        ...state,
        inCart: payload
      }
     
    case UPDATE_QUANTITY:
      return {
        ...state,
        inCart: payload
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        inCart: payload
      }
    
    default: return state
  }
}
