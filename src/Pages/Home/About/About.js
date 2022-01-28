import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {

    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });
    return (
        <div className='container mt-5 pt-2'>
            <h1 className='blog-h'>Who We are?</h1>
            <div className='row'>
                <div data-aos='fade-right' data-aos-duration='1400' className='col-lg-6 col-md-6 col-sm-12'>
                    <h1 className='heading mt-2'>Thanks for looking!</h1>
                    <p className='paragraph'>
                    “How do I find the money to travel? It seems too expensive for me.”
“Where do I find the best travel deals?”
“How do I save money on flights, accommodation, and other big expenses?”
“How do I plan my trip?”
“How do I stay safe and healthy?”
“How do I maximize my time?”
“I want to travel more but I don’t know the first step.”

You are not alone. Over the past eleven years, I’ve helped millions of people answer those questions and travel more for less with time tested and proven tips and advice. By using this website, you can spend less time searching the Internet and being overwhelmed with information and more time doing the one thing you want to do: travel more.
                    </p>
                </div>
                <div data-aos='zoom-in-up' data-aos-duration='1700' className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='image' src="https://i.ibb.co/ZTCsRdZ/img4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;