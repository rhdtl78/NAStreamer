import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(ReduxPromise)
    // other store enhancers if any
  )
)
export default store
