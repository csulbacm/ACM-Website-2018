import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Header = () => (
  <header>

    <AppBar position="fixed">
      <Toolbar>
      <NavLink to="/" style={{textDecoration: 'none', fontSize: '14'}}><Button color="secondary" style={{fontSize: '12px'}}>Home</Button></NavLink>
      <NavLink to="/bulletin" style={{textDecoration: 'none'}}><Button color="secondary" style={{fontSize: '12px'}}>Bulletin</Button></NavLink>
      <NavLink to="/board" style={{textDecoration: 'none'}}><Button color="secondary" style={{fontSize: '12px'}}>Board</Button></NavLink>
      </Toolbar>
    </AppBar>

    {/* <NavLink to="/">Home</NavLink>
    <NavLink to="/bulletin">Bulletin</NavLink>
    <NavLink to="/board">Board</NavLink> */}
  </header>
)

export default Header
