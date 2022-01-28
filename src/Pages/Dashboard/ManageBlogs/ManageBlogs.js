import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageBlogs.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const ManageBlogs = () => {

  useEffect(()=> {
    Aos.init({
        once: true,
    })
});

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://frozen-eyrie-92142.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBlogDelete = (id) => {
        const proceed = window.confirm("Are you sure wanna delete this car?");
        if (proceed) {
          const url = `https://frozen-eyrie-92142.herokuapp.com/blogs/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const remaining = blogs.filter((car) => car._id !== id);
                setBlogs(remaining);
              }
            });
        }
    };
    
    const handleUpdate = () => {
        alert('update method coming soon!')
    }


    return (
        <div className='container mt-5'>
            <h2 className='heading'>Manage All Blogs</h2>
            <div className='row'>
                
                { blogs?.map(blog =><Card data-aos='zoom-in-up' data-aos-duration='1800' className='mb-5 col-lg-3 col-md-3 col-sm-12'>
    <Card.Img className='blogImg' variant="top" src={blog.img} />
    <Card.Body>
                        <Card.Title> Location : { blog.location }</Card.Title>
      <Card.Text>
      Title :   {blog.title}
      </Card.Text>
    </Card.Body>
          <Card.Footer>
                        <button onClick={() => handleBlogDelete(blog?._id)} className="btn sbtn">Delete</button>
                        <button onClick={() => handleUpdate(blog?._id)} className="btn sbtn">Update</button>
                        <Link to={`/details/${blog?._id}`}> <button className='btn sbtn'>Read</button> </Link>
    </Card.Footer>
  </Card>)}
              
            </div>
        </div>
    );
};

export default ManageBlogs;