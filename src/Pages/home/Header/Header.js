import React from 'react';

import {  Container,  Navbar } from 'react-bootstrap';
import './header.css'
import logo from '../../../images/header/cropped-logo (1).png'



const Header = () => {
   
    return (
        <>
            <Navbar className="back" collapseOnSelect expand="lg" >
                <>
                    <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="90"
                        height="30"
                        className="d-inline-block align-top mx-5"
                        alt="React Bootstrap logo"
                    />
                
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-center ">
                        <Navbar.Text className=" text-field" >
                            <p className='p-text'>phone : 017342345</p>
                        </Navbar.Text>
                        <Navbar.Text className="mx-3 text-field">
                        <p className='p-text'>Location : Dhanmondi-27,dhaka,1207</p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </>
            </Navbar>
            
        </>
    );
};

export default Header;