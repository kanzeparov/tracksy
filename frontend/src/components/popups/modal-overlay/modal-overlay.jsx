import ReactDOM from 'react-dom';
import React from 'react';
import './modal-overlay.css';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const modalRoot = document.getElementById('react-modals');
function PopupOverlay({ children }) {
  const { serviceModalOpen } = useSelector((state) => state.services);
  console.log(serviceModalOpen);
  const popupClasses = classNames({
    popup: true,
    popup_opened: serviceModalOpen && true,
  });
  return ReactDOM.createPortal(
    <div
      className={popupClasses}
      // onClick={handleOverlayClose}
    >
      {children}
    </div>,
    modalRoot
  );
}

export default PopupOverlay;
