import React from 'react';
import './Appointement.css'

import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import img1 from '../../images/Appointement/appointment-main2.jpg'
import img2 from '../../images/Appointement/appointment-main3.jpg'
import Hnav from '../home/Header/Hnav';
import Footer from '../sheared/Footer';

const Appointement = () => {
    return (
        <Container>
            <Hnav></Hnav>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className="first-img" src={img1} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                        <img className="second-img" src={img2} alt="" />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <h3>Book An Appointment</h3>
                <Form className='from-section'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="Text" placeholder="Your Name" require />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="Number" placeholder="Phone Number" require />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Doctor You want to Appointment</Form.Label>
                        <Form.Control type="Text" placeholder="Your Name" require/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>Any Suggestion</Form.Label>
                        <Form.Control type="text" placeholder="Comment
                        " />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address (office)</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Japan</option>
                            <option>Qatar</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Appointement;
