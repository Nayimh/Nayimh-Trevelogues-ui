import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AuthProvider from './Context/UseAuth/AuthProvider';

import DashBoardHome from './Pages/Dashboard/DashBoardHome/DashBoardHome';

import ManageBlogs from './Pages/Dashboard/ManageBlogs/ManageBlogs';
import PostBlogs from './Pages/Dashboard/PostBlogs/PostBlogs';

import MainDetails from './Pages/Details/MainDetails/MainDetails';
import MainBlogs from './Pages/Home/BlogSection/MainBlogs/MainBlogs';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Register from './Pages/Shared/Registration/Register';
import ShareStories from './Pages/ShareStory/ShareStories';


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
            </Route>
            <PrivateRoute path="/blogs">
            <MainBlogs/>
            </PrivateRoute>
            <PrivateRoute path="/story">
            <ShareStories/>
            </PrivateRoute>
            <PrivateRoute path="/post">
            <PostBlogs/>
            </PrivateRoute>
            <PrivateRoute path="/manage">
            <ManageBlogs/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoardHome/>
           </PrivateRoute>
            <PrivateRoute path="/details/:id">
              <MainDetails/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
