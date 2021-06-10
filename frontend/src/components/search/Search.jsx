import React from 'react';
import searchIcon from '../../assets/images/search-icon.jpg';
import './search.scss';

function Search() {
  return (
    <div className="input-wrapper">
      <input className="input" />
      <img className="input__icon" alt="icon" src={searchIcon} />
    </div>
  );
}

export default Search;
