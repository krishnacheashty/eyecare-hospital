import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './eachDoctor.css'
const EachDoctor = ({doctor}) => {
    const{id,name,image,expert}=doctor
    return (
        <Container>
                <Col  className="cart-section-card ">
                    <Card className="card-img-section">
                        <Card.Img className="card-img cart-img" variant="top" src={image} />
                        
                    </Card>
                    <Card className=''>
                        <Card.Body>
                            <Card.Title className='c1-title'>{name}</Card.Title>
                            <Card.Text className="mb-3 mx-auto c1-title">
                             {expert}
                            </Card.Text>
                        </Card.Body>
                            
                    </Card>
                </Col>
            </Container> 
    );
};

export default EachDoctor;