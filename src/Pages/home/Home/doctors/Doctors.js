import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Doctors.css'
import EachDoctor from './eachDoctor/EachDoctor';
const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('/doctor.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <Container id='doctors'>
           <h5 className='doctor-text'>Doctors</h5>
           <h3 className='doctor-text-sp'>Opnix Eye Care Specialist</h3>
           <Row xs={1} md={3} className="g-4">
               {
                   doctors.map(doctor=> <EachDoctor
                     key={doctor.id}
                     doctor={doctor}
                   ></EachDoctor>)
               }
           </Row>
        </Container>
    );
};

export default Doctors;