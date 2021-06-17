import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { setIsloggedIn } from '../../actions/userActions';
import bell from '../../assets/images/bell.svg';
import { OPEN_LOGIN_MODAL } from '../../actions/servicesActions';


const Navigation = () => {
  const dispatch = useDispatch();

  function openLoginPopup() {
    dispatch({ type: OPEN_LOGIN_MODAL });
  }

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(setIsloggedIn(false));
  // };

  return (
    <nav className="nav">
      <ul className="nav__list">
        {isLoggedIn ? (
          <li>
            <button type="button">Выйти</button>
          </li>
        ) : (
          <>
            <li className="nav__list-bell">
              <img className="bell" src={bell} alt="bell" />
            </li>
            <li onClick={openLoginPopup} className="nav__list-logo">
              <NavLink   activeClassName="nav__link_active" exact to="/" />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
