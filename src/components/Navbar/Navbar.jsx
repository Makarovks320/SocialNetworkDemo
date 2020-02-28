import React from 'react';
import { NavLink } from 'react-router-dom'
import { AsideNavBar } from './Navbar.styles';
import { connect } from 'react-redux';


const Navbar = (props) => {
  return (
    <AsideNavBar styles={props.styles}>
      <nav className="nav">
        <ul className="list">
          <li>
            <NavLink className="item" to='/profile' activeClassName="activeLink">My profile</NavLink>
          </li>
          <li>
            <NavLink className="item" to='/dialogs' activeClassName="activeLink">Messages</NavLink>
          </li>
          <li>
            <NavLink className="item" to='/communities' activeClassName="activeLink">Communities</NavLink>
          </li>
          <li>
            <NavLink className="item" to='/news' activeClassName="activeLink">News</NavLink>
          </li>
          <li>
            <NavLink className="item" to='/users' activeClassName="activeLink">Users</NavLink>
          </li>
        </ul>
      </nav>
    </AsideNavBar>
  )
}
let mapStateToProps = (state) => {
  return {
  styles: state.theme.themeColors}
}
export default connect(mapStateToProps)(Navbar);
