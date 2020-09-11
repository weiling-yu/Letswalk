import React, { Component } from 'react';
import {Container, Row, Col, Input, Form, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="bg-primary">
                <Container className="bg-light py-5">
                    <Row>
                        <Col className="text-center pb-5 ">
                            <h4>Forgot Your Password?</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center muted" sm="12" md={{ size: 6, offset: 3 }}>
                            <p>We get it, stuff happens. Just enter your email address below 
                                and we'll send you a link to reset your password!
                            </p>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-2">
                            <Input type="email" placeholder="Email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Link to="#">
                                <Button color="primary" block >Reset Password
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <Col className="text-center">
                            <Link to="/createAccount">Create an Account!</Link>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="text-center">
                            <Link to="/login">Already have an Account? Login!</Link>
                        </Col>
                    </Row>
                   
                </Container>
            </div>
        )
    };
};

export default CreateAccount;