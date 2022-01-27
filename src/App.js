import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AuthProvider from './Context/UseAuth/AuthProvider';

import MainDetails from './Pages/Details/MainDetails/MainDetails';
import MainBlogs from './Pages/Home/BlogSection/MainBlogs/MainBlogs';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Register from './Pages/Shared/Registration/Register';


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
