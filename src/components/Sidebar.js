import React, { Component } from 'react';
import {Nav, Navbar, NavLink, Collapse, NavItem, Col} from 'reactstrap';


class Sidebar extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Navbar id="sidebarMenu" expand="sm" className="col-md-3 col-lg-2 bg-light border-right" >
                <Collapse  id="sidebar" isOpen={this.props.isOpen } navbar>
                    <Nav vertical navbar >
                        <NavItem >
                            <NavLink style={{color: "#333"}} href="/home/dashBoard">
                            <span className="fa fa-tachometer lg"></span>{" "}
                            Dashboard 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#333"}} href="/home/steps">
                            <span className="fa fa-tachometer lg"></span>{" "}
                            Steps 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#333"}} href="/home/calories">
                            <span className="fa fa-tachometer lg"></span>{" "}
                            Calories 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#333"}} href="/home/ranking">
                            <span className="fa fa-tachometer lg"></span>{" "}
                            Ranking 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#333"}} href="/home/walks">
                            <span className="fa fa-tachometer lg"></span>{" "}
                            Walks 
                            </NavLink>
                        </NavItem>
                    </Nav>  
                </Collapse>
            </Navbar>
            
        )
    };
};

export default Sidebar;