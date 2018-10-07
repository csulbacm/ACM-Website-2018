import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Header from '../components/Header.js'
import HomePage from '../components/HomePage.js'
import BulletinPage from '../components/BulletinPage.js'
import BoardPage from '../components/BoardPage.js'
import NotFoundPage from '../components/NotFoundPage.js'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: '#ffffff'
    },
    typography: {
      fontSize: 14,
      htmlFontSize: 14,
      fontFamily: [
        'Roboto'
      ].join(',')
    }
  }
});

const AppRouter = () => (
  <MuiThemeProvider theme={theme}>
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
  </MuiThemeProvider>
)

export default AppRouter
