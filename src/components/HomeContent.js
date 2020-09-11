import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Dashboard from './Dashboard';
import Steps from './Steps';
import Calories from './Calories';
import Ranking from './Ranking';
import Walks from './Walks';

class HomeContent extends Component {
    constructor(props){
        super(props);
    }  
    render(){
        return(
            <Switch location={this.props.location}>
                <Route path="/home/dashboard" component={() => <Dashboard />} />
                <Route path="/home/steps" component={() => <Steps />} />
                <Route path="/home/calories" component={() => <Calories />} />
                <Route path="/home/ranking" component={() => <Ranking />} />
                <Route path="/home/walks" component={() => <Walks />} />
                
                <Redirect to="/home/" />
            </Switch>
        )
    };
};

export default HomeContent;