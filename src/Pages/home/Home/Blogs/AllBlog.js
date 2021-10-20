import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const AllBlog = ({blogs}) => {
    const {name,picture,detail,comment}=blogs
    return (
        <>
            <Container>
                <Col  className="cart-section ">
                    <Card className="card-img-section">
                        <Card.Img className="card-img" variant="top" src={picture} />
                        
                    </Card>
                    <Card className='text-card'>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="mb-3 cart-text">
                             {detail.slice(0,170)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text className="text-primary">comment:({comment})</Card.Text>
                    </Card.Body>

                            
                    </Card>
                </Col>
            </Container> 
        </>
    );
};

export default AllBlog;