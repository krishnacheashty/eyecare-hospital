import React from 'react';
import "./banner.css"
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/banner/main1.jpg'
import img2 from '../../../images/banner/main2.jpg'
import img3 from '../../../images/banner/appointment-main1.jpg'
import Header from '../Header/Header';
import Hnav from '../Header/Hnav';

const Banner = () => {
    return (
        <>
            <Header></Header>
            <Hnav></Hnav>
            <Row>
                <Col xs={12} md={12}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block img-section"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className='text'>High Innovation Professional Eye Care</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-section"
                        src={img2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3 className='text'>Eye Care Specialist Services That You Can Trust</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block img-section"
                        src={img3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className='text'>We Only Give Best Care To To Your Eyes </h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
};

export default Banner;