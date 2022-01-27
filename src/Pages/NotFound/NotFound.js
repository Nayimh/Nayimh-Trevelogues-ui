import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className="notFoundContainer"> 
            <div><h1 className="headtext">404 Page Not Found</h1></div>
            <NavLink to='/'><button className="btn">Home</button></NavLink>
        </div>
        </div>
    );
};

export default NotFound;