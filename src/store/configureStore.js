// Combine Reducers will be used in the future when we have multiple sets of separate data (Reducers) that we want to track, ie Schedule, Officers, Other Announcements
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import scheduleCardsReducer from '../reducers/scheduleCards'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default () => {
  const store = createStore(
    scheduleCardsReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
