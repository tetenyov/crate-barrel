import { combineReducers } from 'redux'

import goodsReducer from './goodsReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  goods: goodsReducer,
  cart: cartReducer
})
