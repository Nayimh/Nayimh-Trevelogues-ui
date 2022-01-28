import React from 'react';
import './DashBoard.css';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
  
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/UseAuth';
import ManageBlogs from '../ManageBlogs/ManageBlogs';
import PostBlogs from '../PostBlogs/PostBlogs';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import MyBlogs from '../MyBlogs/MyBlogs';



const drawerWidth = 240;

function DashBoardHome(props) {

  const { logout } = useAuth();
  const { admin, user } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    const drawer = (
    
    <div style={{ height: "100vh" }} sx={{ mt: 5, py: 5 }}>
     
      <Toolbar />
          <h2 className="header" style={{ letterSpacing: "2px", fontWeight: "700", color: "#2247b5" }}>Hi! { user?.displayName }</h2> 
      <Link to="/home"><button className="btn-warning border-0">Home</button></Link>
      
      <br /> <br />
      <Divider />
      
      <Divider></Divider>

      <br />
      {/* <Link to={`${url}/myOrder`}><button className="btn">My Order</button></Link> <br /> <br /> */}
      { admin ?
        <div>
      <Link to={`${url}/ManageBlogs`}><button className="btn">Manage Blogs</button></Link> <br /> <br />
      <Link to={`${url}/addblog`}><button className="btn">Add New Blogs</button></Link> <br /> <br />
      <Link to={`${url}/makeAdmin`}><button className="btn">Make Admin</button></Link> <br /> <br />
      <Link to={`${url}/myBlogs`}><button className="btn">My Blogs</button></Link> <br /> <br />
          
          <NavLink to={`${url}/payment`}><button className="btn">Payment</button></NavLink> <br /> 
      
          
          
        </div>
        :
        <div>
          <Link to={`${url}/myBlogs`}><button className="btn">My Blogs</button></Link> <br /> <br />
          
          <NavLink to={`${url}/payment`}><button className="btn">Payment</button></NavLink> <br /> <br /> 

        </div>
          }
          <br />
      <button onClick={logout} className="btn">logout</button> <br /> <br />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          {admin ? <div>Admin DashBorar</div> : <div>User DashBoard</div>}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
        
        <Switch>
                  <Route exact path={`${path}/ManageBlogs`}>
                      <ManageBlogs/>
          </Route>
                  <Route exact path={`${path}/addblog`}>
                      <PostBlogs/>
                  </Route>
                  <Route exact path={`${path}/makeAdmin`}>
                    <MakeAdmin/>
                  </Route>
                  <Route exact path={`${path}/myBlogs`}>
                    <MyBlogs/>
                  </Route>
                 
                  <Route exact path={`${path}/payment`}>
                    <Payment/>
                  </Route>
      </Switch>
        
        
      </Box>
            </Box>
          
  );
}

DashBoardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoardHome;




// export default DashBoardHome;