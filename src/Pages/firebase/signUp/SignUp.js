import React from 'react';
import './signup.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../../images/registation/graphic4-svg.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Hnav from '../../home/Header/Hnav';
import Footer from '../../sheared/Footer';

const SignUp = () => {
    const {handelRegistration,handelEmailChange,handelPasswordChange,error,handelNameFieldChange}=useAuth();
    return (
        <Container>
            
            <Hnav></Hnav>
            <Row>
                <Col xs={12} md={7} className='from-box'>
                <Container>
                        <Row>
                            <Col xs={12} md={8} className="mx-auto from-container p-0">
                                <h3 className='mb-3 text-white'>Get more things done with Login platform.</h3>
                                <h3  className='mb-5 text-white'>Please Signup</h3>
                                <Form onSubmit={handelRegistration}>
                                    <Form.Group as={Row} className="mb-3 text-white p-0" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} md={3}>
                                        Name
                                        </Form.Label>
                                        <Col sm={10} md={9}>
                                        <Form.Control 
                                        onBlur={handelNameFieldChange} type="text" placeholder="Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3 text-white p-0" controlId="formHorizontalEmail1">
                                        <Form.Label column sm={2} md={3}>
                                        Email
                                        </Form.Label>
                                        <Col sm={10} md={9}>
                                        <Form.Control 
                                        
                                       onBlur={handelEmailChange} type="email" placeholder="Email" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3 text-white " controlId="formHorizontalPassword">
                                        <Form.Label column sm={2} md={3}>
                                        Password
                                        </Form.Label>
                                        <Col sm={10} md={9}>
                                        <Form.Control
                                        onBlur={handelPasswordChange} type="password" placeholder="Password" />
                                       
                                        </Col>
                                    </Form.Group>
                                    <h4 className='text-danger'>{error}</h4>
                                    <Link to='/login'>Already have a account?</Link>

                                    <Form.Group as={Row} className="my-3 ">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit" className='btn btn-light text-dark mb-4'>Signup</Button>
                                        <br />
                                        
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
                <Col xs={12} md={4}>
                    <img src={logo} alt="logo" className='signup-img' fluid="true"/>
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default SignUp;