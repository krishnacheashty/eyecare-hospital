import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Hnav from '../home/Header/Hnav';
import Footer from '../sheared/Footer';
import './booking.css'
const Booking = () => {
    const{serviceId}=useParams()
    const[service,setService]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        const myService=data.find(perService=>perService.id==serviceId)
        setService(myService)
        console.log(service)
       
        })
        
    },[])
    
    
    return (
        <Container>
            
            <Hnav></Hnav>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <Col  className="cart-section ">
                    <Card className="card-img-section">
                        <Card.Img className="card-img" variant="top" src={service.picture} />
                        
                    </Card>
                    <Card className='text-card'>
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text className="mb-3 cart-text">
                             {service.description}
                        </Card.Text>
                        </Card.Body>
                          
                    </Card>
                </Col>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Footer></Footer>

        </Container>
    );
};

export default Booking;