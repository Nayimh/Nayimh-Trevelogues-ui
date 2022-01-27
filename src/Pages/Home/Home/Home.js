import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Blog />
            <Destination/>
            <About />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;