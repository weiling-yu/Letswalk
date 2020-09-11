import React, { Component } from 'react';
import {Container, Card, CardTitle, CardBody, Row, Label, Col, Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
// import {Control, Form, Errors} from 'react-redux-form';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="bg-primary">
            <Container >
                <Row >
                    <Col>
                        <Card md={{ size: 7, offset: 5 }} mt>
                            <CardBody>
                                <CardTitle className="text-center">Welcome Back!</CardTitle>
                                        <Row className="form-group">
                                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                                <Input type="email" id="email" name="email"
                                                    placeholder="Enter Email Address..."
                                                    className="form-control" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                                <Input type="password" id="password" name="password"
                                                    placeholder="Password"
                                                    className="form-control" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="" sm="12" md={{ size: 6, offset: 4 }}>
                                                <Input type="checkbox" id="remenberMe" />
                                                <Label for="remenberMe">Remenber Me</Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                                <Link to="/home">
                                                    <Button color="primary" block >Login
                                                    </Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                                <Button style={{backgroundColor:"#ea4335"}} href="index.html" className="border-0 btn-block mb-1">
                                                <i className="fa fa-google fa-fw"></i> Login with Google
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                                <Button  style={{backgroundColor:"#3b5998"}} href="index.html" className="border-0 btn-block">
                                                    <i className="fa fa-facebook-f fa-fw"></i> Login with Facebook
                                                </Button>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col className="text-center">
                                                <a href="/resetPassword">Forgot Password?</a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-center">
                                                <a href="/createAccount">Create an Account!</a>
                                            </Col>
                                        </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>    
            </Container>
            </div>
        )
    }
};

export default Login;