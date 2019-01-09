import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue';

import Header from '../components/Header.js'
import HomePage from '../components/HomePage.js'
import OfficersPage from '../components/OfficersPage.js'
import UpdatesPage from '../components/UpdatesPage.js'
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
            <Route path="/officers" component={OfficersPage} exact={true}/>
            <Route path="/updates" component={UpdatesPage} exact={true}/>
            <Route path="/backdoor" component={Backdoor}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(AppRouter);
