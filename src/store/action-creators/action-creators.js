import { LOAD_VASES, ADD_TO_CART } from '../../constants/action-types'

export function loadVases() {

  return {
    type: LOAD_VASES,
  }
}

export function addToCart(sku) {
  
  return {
    type: ADD_TO_CART,
    payload: sku
  }
}
