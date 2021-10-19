import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../service/Service';
import './services.css'

const Services = () => {
    const [service,setService]=useState({})
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>{setService(data)})
    },[])
    return (
        <div className='service-container'>
            <h2 className="text">Our Services</h2>

            {<Row xs={1} md={3} className="g-4">
            {
                service.map(service=><Service key={service.id} service={service}></Service>)
            }
            </Row>}
           
        </div>
    );
};

export default Services;

