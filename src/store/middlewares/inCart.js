import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../../constants/action-types'

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
    console.log(action.payload)
    return next(action)
  }
  
  return next(action)
}
