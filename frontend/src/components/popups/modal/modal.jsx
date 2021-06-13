import './modal.css';
import React from 'react';

function Modal({ isClose, children }) {
  return (
    <div className="popup__container">
      <div className="popup__header">
        <button
          aria-label="btn"
          className="button"
          type="button"
          onClick={isClose}
        />
      </div>
      {children}
    </div>
  );
}

export default Modal;
