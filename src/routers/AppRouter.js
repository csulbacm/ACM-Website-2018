import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Header from '../components/Header.js'
import HomePage from '../components/HomePage.js'
import BulletinPage from '../components/BulletinPage.js'
import BoardPage from '../components/BoardPage.js'
import NotFoundPage from '../components/NotFoundPage.js'

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
    },
    typography: {
      useNextVariants: true,
      fontSize: 14,
      htmlFontSize: 14,
      fontFamily: [
        'Roboto'
      ].join(',')
    }
  }
});

const AppRouter = (props) => {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <div>
          <Header/>
          <div className={classes.toolbar} />
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
}

export default withStyles(styles)(AppRouter);
