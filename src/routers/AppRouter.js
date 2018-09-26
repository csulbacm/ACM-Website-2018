import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import Header from '../components/Header.js'
import HomePage from '../components/HomePage.js'
import BulletinPage from '../components/BulletinPage.js'
import BoardPage from '../components/BoardPage.js'
import NotFoundPage from '../components/NotFoundPage.js'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>

      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/bulletin" component={BulletinPage} exact={true}/>
        <Route path="/board" component={BoardPage} exact={true}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
