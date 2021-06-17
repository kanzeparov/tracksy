import './modal.css';
import React from 'react';

function Modal({ isClose, children }) {
  return (
    <div className="popup__container">
        <button
          aria-label="btn"
          className="button"
          type="button"
          onClick={isClose}
        />
      {children}
    </div>
  );
}

export default Modal;
