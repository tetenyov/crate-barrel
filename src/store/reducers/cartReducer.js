import { INCREMENT_QUANTITY,
  DECREMENT_QUANTITY, 
  UPDATE_QUANTITY, 
  DELETE_FROM_CART, 
  UPDATE_TOTAL_ORDER 
} from '../../constants/action-types'

const initialCartState = {
  inCart: []
}

export default (state=initialCartState, action) => {
  const { type, payload } = action
 
  if (type === INCREMENT_QUANTITY
      || type === DECREMENT_QUANTITY
      || type === UPDATE_QUANTITY
      || type === DELETE_FROM_CART
      || type === UPDATE_TOTAL_ORDER
  ) {
    return {
      ...state,
      inCart: payload
    }
  }
  
  return state
}
