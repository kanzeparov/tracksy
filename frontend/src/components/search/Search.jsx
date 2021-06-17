import React from 'react';
import Select from 'react-dropdown-select';
import searchIcon from '../../assets/images/search-icon.svg';
import './search.scss';

function Search() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <div className="search">
        <div className="input-wrapper">
          <input className="input" />
          <img className="input__icon" alt="icon" src={searchIcon} />
        </div>
        <div className="search__select">
        <Select options={options} placeholder="Все"/>
        </div>
      </div>
    </>
  );
}

export default Search;
