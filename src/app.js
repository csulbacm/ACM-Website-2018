/**
1. Create Reducers for dynamic data
2. Create store from Reducers and Provide store to child components in app.js
3. Create a Thunk action generator to initialize store with Firbase data, and call in app.js
4. Call action generators to interact with Redux store / Call Thunk action generators to interact with Firebase data and then update the Redux store
5. Create Selectors to filter Redux store data for desired values ie get only data within a time range
**/

import React from 'react'
import ReactDOM from 'react-dom'
// Used to Provide Redux store to all child components
import { Provider } from 'react-redux'
// Passed into Provider, so all children can access store
import AppRouter from './routers/AppRouter.js'

// Get initial store
import configureStore from './store/configureStore'
// Fetches Firebase data for inital store state
import { startSetScheduleCards } from './actions/scheduleCards'
import { startSetBlogPosts } from './actions/blogPosts'
import { verifyAndLogin } from './actions/auth'

import database, { auth } from './firebase/firebase'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
const jsx = (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

Promise.all([
  store.dispatch(startSetScheduleCards()),
  store.dispatch(startSetBlogPosts())
])
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
  })

  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      store.dispatch(verifyAndLogin(user))
    } else {
      // No user is signed in
    }
  });
