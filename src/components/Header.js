import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Hello</h1>

    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/bulletin" activeClassName="is-active" exact={true}>Bulletin</NavLink>
    <NavLink to="/board" activeClassName="is-active" exact={true}>Board</NavLink>
  </header>
)

export default Header
