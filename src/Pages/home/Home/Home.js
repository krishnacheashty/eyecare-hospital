import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from '../../sheared/Footer';
import AboutUs from '../about us/AboutUs';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import Blog from './Blogs/Blog';
import Doctors from './doctors/Doctors';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <AboutUs></AboutUs>
            <Blog></Blog>

            <Footer></Footer>
        </Container>
    );
};

export default Home;