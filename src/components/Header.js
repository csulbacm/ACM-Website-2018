import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => (
  <header>
    <h1>Hello</h1>

    <AppBar position="static">
      <Toolbar>
      <NavLink to="/" style={{textDecoration: 'none'}}><Button color="secondary">Home</Button></NavLink>
      <NavLink to="/bulletin" style={{textDecoration: 'none'}}><Button color="secondary">Bulletin</Button></NavLink>
      <NavLink to="/board" style={{textDecoration: 'none'}}><Button color="secondary">Board</Button></NavLink>
      </Toolbar>
    </AppBar>

    {/* <NavLink to="/">Home</NavLink>
    <NavLink to="/bulletin">Bulletin</NavLink>
    <NavLink to="/board">Board</NavLink> */}
  </header>
)

export default Header
