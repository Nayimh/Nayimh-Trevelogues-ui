import React from 'react';
import {
    Container, Nav, Navbar
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/UseAuth';
import './Header.css'
const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
  <Container>
  <Navbar.Brand href="/home"><span className="green">Travelogues</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
            
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={HashLink} to="/dashboard">DashBoard</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/explore">Explore Cars</Nav.Link>   
                {user?.email && <Nav.Link as={HashLink} to="/dashBoard">DashBoard</Nav.Link>} */}
                
 
    </Nav>
    <Nav>
      
                
                            {/* <Nav.Link eventKey={2}>
                           
                 
        
                                 <button onClick={logout}  style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}>Logout</button>
                                        
                                        <NavLink to="/login"><button style={{color: 'white', background: '#207FA6', borderStyle: 'none', marginLeft: '15px', borderRadius: '2px'}} className="login">Login</button></NavLink>
                          
                   
                    
                            </Nav.Link> */}
                            
                            <Nav>
              
              <Nav.Link >
                        {user?.email  &&
                          <button style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}  className='mx-3'> { user?.displayName || user?.email}</button>  
                        }
                        
                        {user?.email ?
                        
                        <button onClick={logout}  style={{color: 'white', background: '#207FA6',  borderStyle: 'none' , marginLeft: '15px', borderRadius: '2px'}}>Logout</button>
                        :
                        <NavLink to="/login"><button style={{color: 'white', background: '#207FA6', borderStyle: 'none', marginLeft: '15px', borderRadius: '2px'}} className="login">Login</button></NavLink> }
              </Nav.Link>
            </Nav>
                        
                        </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;