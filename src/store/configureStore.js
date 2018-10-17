import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import scheduleCardsReducer from '../reducers/scheduleCards'
import blogPostsReducer from '../reducers/blogPosts'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default () => {
  const store = createStore(
    combineReducers({
      scheduleCards: scheduleCardsReducer,
      blogPosts: blogPostsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
