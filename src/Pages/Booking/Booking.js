import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './booking.css'
const Booking = () => {
    const{serviceId}=useParams()
    const[service,setService]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
        const myService=data.filter(perService=>perService.id==serviceId)
        setService(myService)
        })
    },[])
    const{name,picture,description}=service[0]
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <Col  className="cart-section ">
                    <Card className="card-img-section">
                        <Card.Img className="card-img" variant="top" src={picture} />
                        
                    </Card>
                    <Card className='text-card'>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="mb-3 cart-text">
                             {description}
                        </Card.Text>
                        </Card.Body>
                          
                    </Card>
                </Col>
                </Col>
                <Col md={3}></Col>
            </Row>

        </Container>
    );
};

export default Booking;