import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DetailsBlogs from '../DetailsBlogs/DetailsBlogs';

const BlogsSections = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            setloading(true);
            const res = await axios.get('https://frozen-eyrie-92142.herokuapp.com/blogs');
            setPosts(res.data);
            setloading(false);
        }

        fetchPost();
    }, [])

    return (
        <div className='mt-5 pt-5'>
        <div className='blog-h mb-3'>
        <h1 className='heading'>Featured</h1>
        <p className='paragraph'>Popular travel blog posts</p>
        </div>
        <div className='container'>
            <div className='row'>
            {
                posts.map(post => <DetailsBlogs loading={loading} blog={ post } key={post._id}/>)
            }
            </div>
        </div>
    </div>
    );
};

export default BlogsSections;