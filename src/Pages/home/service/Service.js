import Button from '@restart/ui/esm/Button';
import React from 'react';
import './service.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{id,name,picture,description}=service
    
    return (
        <div>
            
            <Container>
                <Col  className="cart-section ">
                    <Card className="card-img-section">
                        <Card.Img className="card-img" variant="top" src={picture} />
                        
                    </Card>
                    <Card className='text-card'>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="mb-3 cart-text">
                             {description.slice(1,170)}
                        </Card.Text>
                        </Card.Body>
                          <Link to={`/booking/${id}`}>
                          <Button className='bg-primary btn-Details'>For Details</Button>
                          </Link>
                    </Card>
                </Col>
            </Container>            
        </div>
    );
};

export default Service;

