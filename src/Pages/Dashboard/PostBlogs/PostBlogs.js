
import React, { useEffect } from 'react';

import { useForm } from "react-hook-form";

import axios from 'axios';
import useAuth from '../../../hooks/UseAuth';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';

const PostBlogs = () => {

    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const history = useHistory();

    const onSubmit = (data) => {
        
        axios
        .post("https://frozen-eyrie-92142.herokuapp.com/blogs", data)
        .then((res) => {
          if (res.data.insertedId) {
              alert("Successfully added a car");
              history.push('/home');
            reset();
          }
        });

       
    }
   
  

    return (
        <div className='container mt-5 pt-5 mb-5'>
           
            <div className='row'>
                <div data-aos='zoom-in-down' data-aos-duration='1800' className=' col-lg-6 col-md-6 col-sm-6'>
                    <img className='image' src="https://i.ibb.co/ZTCsRdZ/img4.jpg" alt="" />
                </div>
                <div data-aos='zoom-in-up' data-aos-duration='1800' className='add-new-car col-lg-6 col-md-6 col-sm-6'>
                <h1 className="mt-3 mb-5">Add a new Blog</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="Image url..."  required/>
                    <input type="text" {...register("location")} placeholder="Location..." required/>
                        <input
                        
                        
            {...register("person", { required: true, maxLength: 500 })}
            placeholder="Enter your Name..." required
          />
          
          
          <input type="text" {...register("type")} placeholder="Trip Type eg: parish..." required/>
          <input type="number" {...register("price")} placeholder="Cost..." required/>
          
                        
                        <textarea {...register("title")} placeholder="Blog Title..." required/>
                        <textarea {...register("desc")} placeholder="Description..." required/>
                        <input type="email" {...register("email")} defaultValue={user?.email} disabled />
          <input className="btn-submit" type="submit" />
        </form>
                </div>
            </div>   
         
        </div>
    );
};

export default PostBlogs;