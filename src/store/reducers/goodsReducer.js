import { LOAD_VASES } from '../../constants/action-types'

const initialGoodsState = {
  goodsList: []
}

export default (state = initialGoodsState, action) => {
  const { type, payload } = action
  
  if (type === LOAD_VASES) {
    return {...state, goodsList: state.goodsList.concat(payload)}
  }

  return state
}