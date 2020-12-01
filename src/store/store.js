import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers/rootReducer'
import { goodsList } from './middlewares/goodsList'
import { inCart } from './middlewares/inCart'

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(goodsList, inCart),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
