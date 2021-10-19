import React from 'react';
import './Login.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../../images/login/graphic2-svg.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const{signInUsingGoogle,handelLogin,handelEmailChange,handelPasswordChange,error}=useAuth()
    return (
       
        <Container>
            <Row>
                <Col xs={12} md={6} className='p-0'>
                    <img src={logo} alt="logo" className='login-img' fluid="true"/>
                </Col>
                <Col xs={12} md={6} className='from-login'>
                    <Container>
                        <Row>
                            <Col xs={6} md={8} className="mx-auto from-container p-0">
                                <h3 className='mb-3 text-white'>Get more things done with Login platform.</h3>
                                <h3  className='mb-5 text-white'>Please Login</h3>
                                
                                <Form onSubmit={handelLogin}>
                                    <Form.Group as={Row} className="mb-3 text-white p-0" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} md={3}>
                                        Email
                                        </Form.Label>
                                        <Col sm={10} md={9}>
                                        <Form.Control
                                        onBlur={handelEmailChange} type="email" placeholder="email" />
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
                                    <p className="text-danger">{error}</p>
                                    <Link to='/signup'>Goto Register</Link>

                                    <Form.Group as={Row} className="my-1">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit" className='btn btn-light text-dark mb-4'>Login</Button>
                                        <br />
                                        
                                        </Col>
                                    </Form.Group>
                                </Form>
                                <div className='text-white'><small>or Login with</small> <button onClick={signInUsingGoogle} >GOOGLE</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        
        
    );
};

export default Login;