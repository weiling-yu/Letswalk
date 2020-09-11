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
                <Container className="bg-light py-3">
                    <Row>
                        <Col className="text-center pb-3">
                            <h4>Create an Account</h4>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-1">
                                <Input type="text" className="form-control" placeholder="First Name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-1">
                                <Input type="text" className="form-control" placeholder="Last Name" />
                            </Col>
                        </Row>
                        <Row >
                            <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-1">
                                <Input type="email" className="form-control" placeholder="Email" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-1">
                                <Input type="password" className="form-control" placeholder="Password" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-1">
                                <Input type="password" className="form-control" placeholder="Repeat Password" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} className="mb-1">
                                <Link to="#" >
                                    <Button color="primary" block >Register Account
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
                        <Row >
                            <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
                                <Link to="/login">Already have an Account? Login!</Link>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    };
};

export default CreateAccount;