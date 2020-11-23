import { LOAD_VASES, ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY } from '../../constants/action-types'

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

export function deleteFromCart(sku) {
  
  return {
    type: DELETE_FROM_CART,
    payload: sku
  }
}

export function updateQuantity(sku, qty) {
  
  return {
    type: UPDATE_QUANTITY,
    payload: sku,
    quantity: qty
  }
}
