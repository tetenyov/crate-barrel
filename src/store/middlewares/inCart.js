import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../../constants/action-types'

export const inCart = (state) => (next) => (action) => {
  const { type, payload } = action 

  if (type === INCREMENT_QUANTITY) {
    if (!localStorage.inCart) {
      localStorage.setItem('inCart', '[]')
    }

    localStorage.inCart = JSON.stringify([...JSON.parse(localStorage.inCart), payload])
    action.payload = JSON.parse(localStorage.inCart)

    return next(action)
  }

  if (type === DECREMENT_QUANTITY) {
    const index = JSON.parse(localStorage.inCart).findIndex(item => item === action.payload)
    const inCartFiltrated = JSON.parse(localStorage.inCart).filter((item, i) => i !== index)

    localStorage.inCart = JSON.stringify(inCartFiltrated)
    action.payload = inCartFiltrated

    return next(action)
  }
  return next(action)
}
