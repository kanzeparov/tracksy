import React from 'react';
import './Header.scss';
import Logo from '../../shared/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <Logo />
    <Navigation />
  </header>
);

export default Header;
