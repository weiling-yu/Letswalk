import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, NavItem} from 'reactstrap'
import { render } from '@testing-library/react';

class TopNavbar extends Component {
    constructor(props){
      super(props);
    }  

    render(){
    return (
        <div>
          <Navbar className="navbar navbar-dark bg-dark flex-md-nowrap p-2 shadow">
            <div className="container">
              <NavbarBrand style={{color: "#939ba2"}} className="col-md-3 col-lg-2 mr-auto px-0 d-inline" to="/home/">LetsWalk</NavbarBrand>
              <Nav className="navbar-nav px-3">
                <NavItem className="text-nowrap">
                  <NavLink className="nav-link" href="/login">Sign out</NavLink>
                </NavItem>
              </Nav>
              <NavbarToggler className="d-md-none d-inline ml-auto" onClick={this.props.toggle} id="sidebar"/>
            </div>
          </Navbar>
      </div>
    )
  }
};
export default TopNavbar;