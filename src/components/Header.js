import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { startLogout } from '../actions/auth'

const buttonStyle = {fontSize: '12px'}
const navLinkStyle =  {textDecoration: 'none', fontSize: '14'}
const lastNavLink = {textDecoration: 'none', fontSize: '14', flexGrow: 1}

const Header = (props) => (

  <header>
    <AppBar position="fixed" style={{overflow:'hidden'}}>
      <Toolbar>
      <NavLink to="/" style={navLinkStyle}><Button color="secondary" style={buttonStyle}>Home</Button></NavLink>
      <NavLink to="/officers" style={navLinkStyle}><Button color="secondary" style={buttonStyle}>Officers</Button></NavLink>
      <NavLink to="/board" style={lastNavLink}><Button color="secondary" style={buttonStyle}>Updates</Button></NavLink>
      {
        props.isAuthenticated &&
        <Button
          style={buttonStyle}
          color="secondary"
          onClick={() => {
            props.startLogout()
          }}
        >
          Logout
        </Button>
      }
      </Toolbar>
    </AppBar>

    {/* <NavLink to="/">Home</NavLink>
    <NavLink to="/bulletin">Bulletin</NavLink>
    <NavLink to="/board">Board</NavLink> */}
  </header>
)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  }
}
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => {
    dispatch(startLogout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
