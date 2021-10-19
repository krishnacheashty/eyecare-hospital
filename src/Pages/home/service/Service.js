import Button from '@restart/ui/esm/Button';
import React from 'react';
import './service.css'
import { Card, Col, Row } from 'react-bootstrap';

const Service = ({service}) => {
    const{id,name,picture,description}=service
    
    return (
        <div>
            

                <Col>
                    <Card className="cart-section ">
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="mb-3">
                             {description.slice(1,170)}
                        </Card.Text>
                        </Card.Body>
                            <Button className='bg-primary btn-Details'>For Details</Button>
                    </Card>
                </Col>
            
        </div>
    );
};

export default Service;

