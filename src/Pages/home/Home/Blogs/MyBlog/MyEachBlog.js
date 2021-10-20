import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const MyEachBlog = ({blogs}) => {
    const {name,picture,detail}=blogs
    return (
        <Container>
                <Col  className="cart-section ">
                    <Card className="card-img-section">
                        <Card.Img className="card-img" variant="top" src={picture} />
                        
                    </Card>
                    <Card className='text-card'>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="mb-3 cart-text">
                             {detail}
                        </Card.Text>
                    </Card.Body>
                   

                            
                    </Card>
                </Col>
            </Container> 
    );
};

export default MyEachBlog;