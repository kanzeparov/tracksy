import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Main.scss';
import Home from '../../pages/Home';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import ProtectedRoute from '../../shared/ProtectedRoute';
import { setCurrentUser } from '../../actions/userActions';
import { register, login } from '../../actions/authActions';

const Main = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = async (userData) => {
    try {
      await dispatch(login(userData));
      dispatch(setCurrentUser(userData));
    } catch (err) {
      console.log('at login', err);
    }
  };

  const handleRegister = async (userData) => {
    try {
      await dispatch(register(userData));
      handleLogin(userData);
    } catch (err) {
      console.log('at register', err);
    }
  };

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signup">
          {isLoggedIn ? (
            <Redirect to="/profile" />
          ) : (
            <Register onRegister={handleRegister} />
          )}
        </Route>

        <Route path="/signin">
          {isLoggedIn ? (
            <Redirect to="/profile" />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>

        <ProtectedRoute
          path="/profile"
          component={Profile}
          isLoggedIn={isLoggedIn}
        />
      </Switch>
    </main>
  );
};

export default Main;
