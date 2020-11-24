import { LOAD_VASES, INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, DELETE_FROM_CART } from '../../constants/action-types'

export function loadVases() {

  return {
    type: LOAD_VASES,
  }
}

export function incrQuantity(sku) {
  
  return {
    type: INCREMENT_QUANTITY,
    payload: sku
  }
}

export function decrQuantity(sku) {
  
  return {
    type: DECREMENT_QUANTITY,
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

export function deleteFromCart(sku) {
  
  return {
    type: DELETE_FROM_CART,
    payload: sku,
  }
}
