import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';
const modalRoot = document.getElementById('react-modals');

function PopupOverlay({ isOpen, children, handleOverlayClose }) {
  return ReactDOM.createPortal(
    <div
      className={`${styles.popup}  ${isOpen && styles.popup_opened}`}
      onClick={handleOverlayClose}
    >
      {children}
    </div>,
    modalRoot
  );
}

export default PopupOverlay;
