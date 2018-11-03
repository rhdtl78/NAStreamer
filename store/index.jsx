import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
export default store
