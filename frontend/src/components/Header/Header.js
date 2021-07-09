import React from 'react';
import './Header.scss';
import Logo from '../../shared/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <Logo />
      <Navigation />
    </div>
  </header>
);

export default Header;
