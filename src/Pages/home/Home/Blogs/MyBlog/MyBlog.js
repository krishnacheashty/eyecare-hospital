import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyEachBlog from './MyEachBlog';

const MyBlog = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('/medicineBlog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <Container>
            <h2 className="text-handel my-5">News and Blogs</h2>
            <h3 className='doctor-text-sp'>Read Latest News From Our Blog</h3>
            <Row xs={1} md={2}>
                {
                    blogs.map(blogs => <MyEachBlog key={blogs.id}
                    blogs={blogs}></MyEachBlog>)    
                }
            </Row>
        </Container>
    );
};

export default MyBlog;