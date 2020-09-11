import React, { Component } from 'react';
import {Nav, Navbar, NavLink, NavbarToggler, NavItem, Input} from 'reactstrap'
import { render } from '@testing-library/react';

class TopNavbar extends Component {
    constructor(props){
      super(props);
    }  

    render(){
    return (
        <div>
          <Nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <div>
              <NavLink style={{color: "#939ba2"}} className="navbar-brand col-md-3 col-lg-2 mr-0 px-4 d-inline" to="/home/">LetsWalk</NavLink>
              <NavbarToggler className="d-md-none d-inline ml-auto" onClick={this.props.toggle} id="sidebar"/>
            </div>
            <Navbar className="navbar-nav px-3">
              <NavItem className="text-nowrap">
                <NavLink className="nav-link" href="/login">Sign out</NavLink>
              </NavItem>
            </Navbar>
          </Nav>
      </div>
    )
  }
};
export default TopNavbar;