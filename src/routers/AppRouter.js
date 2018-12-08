import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Header from '../components/Header.js'
import HomePage from '../components/HomePage.js'
import BulletinPage from '../components/BulletinPage.js'
import BoardPage from '../components/BoardPage.js'
import Backdoor from '../components/Backdoor.js'
import NotFoundPage from '../components/NotFoundPage.js'

export const history = createHistory()

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: '#ffffff'
    }
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
});

const AppRouter = (props) => {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Router history={history}>
        <div>
          <Header/>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/bulletin" component={BulletinPage} exact={true}/>
            <Route path="/board" component={BoardPage} exact={true}/>
            <Route path="/backdoor" component={Backdoor}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(AppRouter);
