import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Hnav = () => {
    const{user,logOut}=useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={HashLink} to='/home#home'>Home</Nav.Link>
                    <Nav.Link as={HashLink} to='/services#services'>Services</Nav.Link>
                    <Nav.Link as={HashLink} to='/blogs#blogs'>Blogs</Nav.Link>
                    <Nav.Link as={HashLink} to='#doctors'>Doctors</Nav.Link>
                    <Nav.Link as={HashLink} to='/appointment'>Appointment</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    {user.email && <span className='text-white mx-3'>  {user.displayName}</span> }
                    {
                        user.email ? 
                        <Button onClick={logOut}><Link to ='/login'>Logout</Link></Button>
                         :
                         <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    }
                    
                       
                    
                    </Nav>
                </Navbar.Collapse>
                
                </Navbar>
            
        </>
    );
};

export default Hnav;