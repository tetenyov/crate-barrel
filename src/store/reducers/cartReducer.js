import { ADD_TO_CART, DELETE_FROM_CART } from '../../constants/action-types'
import { deleteFirstEqual } from '../../util/util'

const initialCartState = {
  inCart: [],
  counter: 0
}

export default (state=initialCartState, action) => {
  const { type, payload } = action

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

    default: return state
  }
}
