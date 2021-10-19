import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Hnav = () => {
    const{user,logOut}=useAuth();
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                    <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                    <Nav.Link as={Link} to='/doctors#doctors'>Doctors</Nav.Link>
                    
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
                </Container>
                </Navbar>
            
        </Container>
    );
};

export default Hnav;