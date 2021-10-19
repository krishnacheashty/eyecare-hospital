import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            this is home page
            <Link to='/login'>login</Link>
            ###### **** ## ** 
            <Link to='/signup'>register</Link>
        </div>
    );
};

export default Home;