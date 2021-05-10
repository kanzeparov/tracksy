import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Main.scss';
import Home from '../../pages/Home';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import ProtectedRoute from '../../shared/ProtectedRoute';
import { setIsloggedIn, setCurrentUser } from '../../actions/userActions';

const Main = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    // example name, delete this code later
    if (!userData.name) {
      userData = { ...userData, name: 'Bro' }; //eslint-disable-line
    }
    // здесь будет логика входа
    dispatch(setIsloggedIn(true));
    dispatch(setCurrentUser(userData));
  };

  const handleRegister = (userData) => {
    // здесь будет логика регистрации, после чего производится авто-вход
    handleLogin(userData);
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
