import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import scheduleCardsReducer from '../reducers/scheduleCards'
import blogPostsReducer from '../reducers/blogPosts'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default () => {
  const store = createStore(
    combineReducers({
      scheduleCards: scheduleCardsReducer,
      blogPosts: blogPostsReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
