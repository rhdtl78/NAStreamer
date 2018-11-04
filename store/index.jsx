import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { logger } from 'redux-logger'

import reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware(logger, ReduxPromise)(
  createStore
)
const store = createStoreWithMiddleware(reducers)
export default store
