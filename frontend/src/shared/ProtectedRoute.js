/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />}
  </Route>
);

export default ProtectedRoute;
