import { vases } from '../../data/goods'
import { ADD_TO_CART, LOAD_VASES } from '../../constants/action-types'

export const goodsList = (store) => (next) => (action) => {
  const goodsInStore = !!store.getState().goods.goodsList.length
  console.log(goodsInStore)
  if (action.type === LOAD_VASES && !goodsInStore) {
     action.payload = vases

     return next(action)
  } 

  if (action.type === ADD_TO_CART) {
    return next(action)
  } 
  
  return next
}
