import React from 'react';
import "./notFound.css"
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <Container >
            <Row className="notfound-container">
                <Col xs={12} md={12}>
                <Link  to='/home'><Button className="btn-field">Go Back Home </Button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;

