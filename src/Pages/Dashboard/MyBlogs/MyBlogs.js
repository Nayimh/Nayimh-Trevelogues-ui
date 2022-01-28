import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/UseAuth';

const MyBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://frozen-eyrie-92142.herokuapp.com/blogs/${user?.email}`)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [user.email])

   
    
    
    const handleBlogDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://frozen-eyrie-92142.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.length);
                    if (data.deletedCount) {
                        const remaining = blogs.filter((order) => order._id !== id);
                        setBlogs(remaining);
                    }
                })
        }
    }

    return (
        <div className='container mt-5'>
            <h2 className='heading'>My Blogs</h2>
            <div className='row'>
                
                { blogs?.map(blog =><Card className='mb-5 col-lg-3 col-md-3 col-sm-12'>
    <Card.Img className='blogImg' variant="top" src={blog.img} />
    <Card.Body>
                        <Card.Title> Location : { blog.location }</Card.Title>
      <Card.Text>
      Title :   {blog.title}
      </Card.Text>
    </Card.Body>
          <Card.Footer>
                        <button onClick={() => handleBlogDelete(blog?._id)} className="btn sbtn">Delete</button>
                        
    </Card.Footer>
  </Card>)}
              
            </div>
        </div>
    );
};

export default MyBlogs;