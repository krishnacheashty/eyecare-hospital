import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        
        <Container >
            <Row className='footer-section'>
                <Col xs={7} md={3}>
                    <h2>Contact</h2>
                    <h4>Phone : <br /><span>1765867</span></h4>
                    <h4>Email : <br /><span>medicare@gmail.com</span></h4>
                    <h4>Address : <br /><span>1/2,Dhanmondi-27,Dhaka,Bangladesh</span></h4>
                </Col>
                <Col xs={5} md={3}>
                    <h2>About</h2>
                    <h4>Doctor</h4>
                    <h4>About</h4>
                    <h4>services</h4>
                    <h4>Departments</h4>
                </Col>
                <Col xs={6} md={3}>
                    <h2>Explore</h2>
                    <h4>Blog</h4>
                    <h4>Appointment</h4>
                    <h4>Shop</h4>
                    <h4>Portfolio</h4>
                </Col>
                <Col xs={6} md={3}>
                    <h2>Support</h2>
                    <h4>Online Support</h4>
                    <h4>Free Consultancy</h4>
                    <h4>Make Call</h4>
                    <h4>24/7 Service</h4>
                </Col>
            </Row>
            <Row className="tram-condition">
                <Col xs={4} md={8}>
                    <p>Copyright ©2021 by medicine kolo</p>
                </Col>
                <Col xs={6} md={4}>
                    <h5>Tram & Condition | Privacy Policy</h5>
                </Col>
            </Row>

        </Container>
        
    );
};

export default Footer;