import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';
import logo from '../../assets/images/logo.svg';

const Logo = () => (
  <NavLink to="/">
    <img src={logo} alt="Лого" className="logo" />
  </NavLink>
);

export default Logo;
