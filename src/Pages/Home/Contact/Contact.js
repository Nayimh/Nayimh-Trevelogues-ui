import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(()=> {
    Aos.init({
        once: true,
    })
});
    return (
        <div className='container'>
            <h1 className='blog-h mt-5'>Contact Us</h1>
            <div className='row'>
                <div data-aos='zoom-in-down' data-aos-duration='1500' className='col-lg-6 col-md-6 col-sm-12'>
                <img className='image' src="https://i.ibb.co/sJ6VMDK/img1.jpg" alt="" />
                </div>
                <div data-aos='zoom-in-up' data-aos-duration='1800' className='col-lg-6 col-md-6 col-sm-12'>
                <Form className="w-75 mx-auto my-5 ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
    <Form.Label className="text-white">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text-white">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
                
  <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
 <br />
  <button className="btn">Submit</button>
</Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;