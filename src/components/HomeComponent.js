import React, {Component} from 'react';

import HomeContent from './HomeContent';

import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import { render } from '@testing-library/react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSidebarOpen : false
          };
        this.ToggleSidebar = this.ToggleSidebar.bind(this);
        }
    ToggleSidebar(){
        this.setState({
            isSidebarOpen : !this.state.isSidebarOpen
        })
    };
    render(){
        return (
            <div>
                <TopNavbar toggle={this.ToggleSidebar}/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar isOpen={this.state.isSidebarOpen} toggle={this.ToggleSidebar} />
                        <HomeContent />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Home;