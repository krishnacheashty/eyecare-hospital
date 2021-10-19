import React from 'react';

import {  Container,  Navbar } from 'react-bootstrap';
import './header.css'
import logo from '../../../images/header/cropped-logo (1).png'



const Header = () => {
   
    return (
        <Container>
            <Navbar className="back" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="90"
                        height="30"
                        className="d-inline-block align-top mx-5"
                        alt="React Bootstrap logo"
                    />
                
                    </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end ">
                        <Navbar.Text className=" text-field" >
                            <p className='p-text'>phone : 017342345</p>
                        </Navbar.Text>
                        <Navbar.Text className="mx-3 text-field">
                        <p className='p-text'>Location : Dhanmondi-27,dhaka,1207</p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            </Container>
    );
};

export default Header;