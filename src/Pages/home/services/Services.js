import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../service/Service';
import './services.css'

const Services = () => {
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{setService(data)})
    },[])
    return (

        <Container>
            
            <h2 className="text-handel my-5">Our Services</h2>

           <Row xs={1} md={3}  className='service-container g-4'>
            {
                service.map(service=><Service key={service.id} service={service}></Service>)
            }
            </Row>
           
        </Container>
    );
};

export default Services;

