import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if(isLoading){return <Spinner animation="border" variant="success"></Spinner>}

    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;