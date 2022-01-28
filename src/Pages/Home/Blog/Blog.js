import React, { useEffect, useState } from 'react';
import './Blog.css'
import axios from 'axios';
import BlogDetails from './BlogDetails/BlogDetails';


const Blog = () => {

   

    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        const fetchPost = async () => {
            setloading(true);
            const res = await axios.get('https://frozen-eyrie-92142.herokuapp.com/blogs');
            setPosts(res.data);
            setloading(false);
        }

        fetchPost();
    }, [])


    // get Current Post
    // const indexOfLastPost = currentPage * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost ,indexOfLastPost);


    return (
        <div className='mt-5 pt-5'>
            <div className='blog-h mb-3'>
            <h1 className='heading'>Featured</h1>
            <p className='paragraph'>Popular travel blog posts</p>
            </div>
            <div className='container'>
                <div className='row'>
                {
                    posts.map(post => <BlogDetails blog={ post } loading={loading} key={post._id}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Blog;