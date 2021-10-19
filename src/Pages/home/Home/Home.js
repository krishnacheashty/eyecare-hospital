import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from '../../sheared/Footer';
import Banner from '../banner/Banner';
import Services from '../services/Services';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Services></Services>

            <Footer></Footer>
        </Container>
    );
};

export default Home;