import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers/rootReducer'
import { goodsList } from './middlewares/goodsList'

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(goodsList),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
