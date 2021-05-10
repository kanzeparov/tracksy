import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsloggedIn } from '../../actions/userActions';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setIsloggedIn(false));
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="nav__link_active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        {!isLoggedIn ? (
          <>
            <li className="nav__item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/signin"
              >
                Log In
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav__item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/profile"
              >
                Profile (private)
              </NavLink>
            </li>
            <li className="nav__item">
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
