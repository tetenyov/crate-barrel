import { ADD_TO_CART } from '../../constants/action-types'

const initialCartState = {
  inCart: [],
  counter: 0
}

export default (state=initialCartState, action) => {
  const { type, payload } = action
 
  console.log(type)
  if (type === ADD_TO_CART) {
     return {
       ...state,
       counter: state.counter + 1,
       inCart: [ ...state.inCart, payload]
     }
  }
  return state
}
