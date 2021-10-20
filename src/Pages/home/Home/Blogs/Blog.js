import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllBlog from './AllBlog';

const Blog = () => {
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
            <Row xs={1} md={3}>
                {
                    blogs.slice(0,3).map(blogs => <AllBlog key={blogs.id}
                    blogs={blogs}></AllBlog>)    
                }
            </Row>
        </Container>
    );
};

export default Blog;