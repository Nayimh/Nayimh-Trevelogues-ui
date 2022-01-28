import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlogDetails.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const BlogDetails = ({ blog, loading }) => {
  useEffect(()=> {
    Aos.init({
        once: true,
    })
});

    
    if (loading) {
        return <h2>Loading...</h2>
    }


    return (
       
            <div className='col-lg-3 col-md-4 col-sm-12'>
            <Card data-aos='zoom-in-left' data-aos-duration='1700' className='m-3'>
    <Card.Img className='blogImg' variant="top" src={blog.img} />
    <Card.Body>
                        <Card.Title> Location : { blog.location }</Card.Title>
      <Card.Text>
      Title :   {blog.title}
      </Card.Text>
    </Card.Body>
          <Card.Footer>
            <Link to={`/details/${blog?._id}`}>
      <button  style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , display: 'flex', justifyContent: 'center', borderRadius: '2px'}}>Read more...</button> </Link>
    </Card.Footer>
  </Card>
            
        </div>
    );
};

export default BlogDetails;