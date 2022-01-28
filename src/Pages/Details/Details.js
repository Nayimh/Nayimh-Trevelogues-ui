import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Details.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Details = () => {

    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });

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
                
                <div data-aos='zoom-in-down' data-aos-duration='1800' className='col-lg-6 col-md-6 col-sm-6'>
            <img className='image mb-3' src={details?.img} alt="" />
                </div>
                <div data-aos='zoom-in-up' data-aos-duration='1800' className='col-lg-6 col-md-6 col-sm-6 heading'>
                    <h3> Location : {details?.location}</h3> <br /> 
                    <h4>Title :  {details?.title}</h4> 
                    <h6>Cost : ${ details?.price }</h6>
                    <p> The Story of a { details?.type }</p>
                    <p>by : { details?.person }</p>
                    <p>{details?.desc}</p>
                    
                    <Link to="/story">
                    <button  style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px', textDecoration: 'none'}}>Share your Story</button></Link>

                </div>
                
            </div>
            
        </div>
    );
};

export default Details;