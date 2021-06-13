import ReactDOM from 'react-dom';
import React from 'react';
import './modal-overlay.css';

import classNames from 'classnames';

const modalRoot = document.getElementById('react-modals');
function PopupOverlay({ isOpen, children, handleOverlayClose }) {
  const popupClasses = classNames({
    popup: true,
    popup_opened: isOpen,
  });

  return ReactDOM.createPortal(
    <div
      className={popupClasses}
      aria-hidden="true"
      onKeyDown={handleOverlayClose}
      onClick={handleOverlayClose}
    >
      {children}
    </div>,
    modalRoot
  );
}

export default PopupOverlay;
