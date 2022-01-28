import React, { useEffect, useState } from 'react';
import './Login.css'
import { Badge, Form, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });

    const [loginData, setLoginData] = useState({});
    const { login, user, authError, isLoading, googleSignin } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
       
    }

    const handleLogin = e => {
          
        login(loginData?.email, loginData?.password, location, history);
       
    e.preventDefault()
    }
    
    const handleGoogleSignin = () => {
        googleSignin(location, history)
    }


    return (
        <div className='mt-5 pt-5'>
            <h1 className='text-center  logh'>Login</h1>
            <div className='container mt-5'>
                <div className='row'>
                    <div data-aos='zoom-in-up' data-aos-duration='1800' className='col-sm-12 col-md-6 col-lg-6 mb-5'>
                       
                            
                        {isLoading ? <Spinner animation="border" variant="success" />
                            :
                            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' onChange={handleOnchange}  placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' onChange={handleOnchange} placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
  </Form.Group>
  <button type="submit" className='btn'>Login</button>
                            </Form>}
                            {
                            user?.email && <Badge bg="success"> Successfully LoggedIn</Badge>
                        }
                        {
                            authError && <Badge bg="danger">something went wrong. Please! try again!</Badge>
                        }
                        <div className='text-center my-3 text-success shadow rounded'>-----------or-------------</div>
                         <button className='btn' onClick={handleGoogleSignin}>Google Sign In</button> 
                        
                            
               
            
                        <div className='text-success shadow mt-3 rounded p-1'>
                            <h5>New User? Please <Link to="/register">Register</Link> </h5> OR
                            <Link to="/"><h5>Go Home</h5></Link>
                        </div>
                    </div>
                    <div data-aos='zoom-in-down' data-aos-duration='1800' className='col-sm-12 col-md-6 col-lg-6'>
                        <img className='w-100 rounded shadow' src="https://i.ibb.co/bsZ4G72/img12.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;