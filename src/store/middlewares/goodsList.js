import { vases } from '../../data/goods'
import { LOAD_VASES } from '../../constants/action-types'

export const goodsList = (store) => (next) => (action) => {
  const goodsInStore = !!store.getState().goods.goodsList.length
 
  if (action.type === LOAD_VASES && !goodsInStore) {
     action.payload = vases
  }

  return next(action)
}