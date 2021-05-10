/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './Input.scss';

const Input = ({
  label = '',
  type = 'text',
  name = '',
  placeholder = '',
  errorMessage = '',
  value,
  onChange,
  validationOptions = {},
}) => (
  <div className="input-field">
    <label className="input-field__label" htmlFor={name}>
      {label}
    </label>
    <input
      className="input-field__input"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...validationOptions}
    />
    <span className="input-field__error">{errorMessage}</span>
  </div>
);

export default Input;
