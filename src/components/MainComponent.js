import React, { Component } from 'react';

import Home from './HomeComponent';
import Login from './LoginComponent';
import CreateAccount from './CreateAccount';
import ResetPassword from './ResetPassword';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

class MainComponent extends Component {
    render(){
        return (
            <div>
                
                <Switch location={this.props.location}>
                    <Route path="/login" component={() => <Login/>} />
                    <Route path="/home/" component={() => <Home />} />
                    <Route path="/createAccount" component={() => <CreateAccount />} />
                    <Route path="/resetPassword" component={() => <ResetPassword />} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        )
    }
};

export default MainComponent;