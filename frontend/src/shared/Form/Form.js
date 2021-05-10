import React from 'react';
import './Form.scss';

const Form = ({ children, data = null, onSubmit = null }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
