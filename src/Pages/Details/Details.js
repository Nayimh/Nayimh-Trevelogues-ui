import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
const Details = () => {

    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);
    const [details, setDetails] = useState({});
    
    useEffect(() => {
        fetch('https://frozen-eyrie-92142.herokuapp.com/blogs')
            .then(res => res.json())
            .then(dt => setBlogs(dt))
    }, []);

    useEffect(() => {
        const foundDetails = blogs.find(blog => blog._id === id);
        setDetails(foundDetails);
    }, [blogs, id])


    return (
        <div className='container mt-5 pt-5 heigt'>
            <div className='row'>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
            <img className='image mb-3' src={details?.img} alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 heading'>
                    <h3> Location : {details?.location}</h3> <br /> 
                    <h4>Title :  {details?.title}</h4> 
                    <h6>Cost : ${ details?.price }</h6>
                    <p> The Story of a { details?.type }</p>
                    <p>by : { details?.person }</p>
                    <p>{details?.desc}</p>
                    
                    <button  style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}>Share your Story</button>

                </div>
                
            </div>
            
        </div>
    );
};

export default Details;