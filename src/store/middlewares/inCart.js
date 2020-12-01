import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, DELETE_FROM_CART } from '../../constants/action-types'

export const inCart = (state) => (next) => (action) => {
  const { type, payload } = action 

  if (type === INCREMENT_QUANTITY) {
    if (!localStorage.inCart) {
      localStorage.setItem('inCart', '[]')
    }

    localStorage.inCart = JSON.stringify(
      [...JSON.parse(localStorage.inCart), payload]
    )

    action.payload = JSON.parse(localStorage.inCart)
  }

  if (type === DECREMENT_QUANTITY) {
    const index = JSON.parse(localStorage.inCart)
                      .findIndex(item => item === action.payload)

    const inCartFiltrated = JSON.parse(localStorage.inCart)
                                .filter((item, i) => i !== index)

    localStorage.inCart = JSON.stringify(inCartFiltrated)

    action.payload = inCartFiltrated
  }

  if (type === UPDATE_QUANTITY) {
    const { quantity } = action
    const itemsInCart = JSON.parse(localStorage.inCart)
                            .filter(item => item === payload)
                            .length

    if (itemsInCart === quantity)  {

      action.payload = JSON.parse(localStorage.inCart)
      return next
    }

    const itemsUpdatedQty = Array.from({length: quantity}, item => payload)
    const inCartWithoutItem = JSON.parse(localStorage.inCart)
                                  .filter(item => item !== payload)

    const inCartWithUpdatedQty = inCartWithoutItem.concat(itemsUpdatedQty)
    localStorage.inCart = JSON.stringify(inCartWithUpdatedQty)

    action.payload = inCartWithUpdatedQty
  }

  if (type === DELETE_FROM_CART) {
    localStorage.inCart = JSON.stringify(
      JSON.parse(localStorage.inCart)
          .filter(item => item !== payload)
    )

    action.payload = JSON.parse(localStorage.inCart)
  }

  return next(action)
}
