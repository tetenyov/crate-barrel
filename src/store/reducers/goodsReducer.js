import { LOAD_VASES } from '../../constants/action-types'

const initialGoodsState = {
  goodsList: []
}

export default (state = initialGoodsState, action) => {
  const { type, payload } = action
  console.log('in reducer ' + payload)
  
  if (type === LOAD_VASES) {
    return {
      ...state, 
      goodsList: payload ? state.goodsList.concat(payload) : state.goodsList
    }
  }

  return state
}