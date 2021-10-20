import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'
import img from '../../../images/AboutUs/team-img04.jpg'
const AboutUs = () => {
    return (
        <div>
            <Row className='mt-5 mb-5'>
                <Col xs={12} md={6} className='about-section'>
                    <h5 className='text-center about-text-h5-section'>About Us</h5>
                    <h3 className="about-text-h3-section">WELCOME TO WILFUL VISION . <br /> We Are Caring For Your Eye Health Hospital</h3>
                    <Row>
                        <Col md={6}>
                            <li>Conducts eye health checkups</li>
                            <li>Contact lens service</li>
                            <li>Best lasik treatment</li>
                            
                        </Col>
                        <Col md={6}>
                            <li>Special Retina exam</li>
                            <li>Special eye exam</li>
                            <li>Treats minor illnesses</li>
                        </Col>
                    </Row>
                </Col>
                <Col xs={7} md={6}>
                    <img className="my-img" src={img} alt="doctorPicture" fluid="true" />
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;