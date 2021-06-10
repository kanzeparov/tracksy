import styles from './modal.module.css';

function Modal({ isClose, name, title, children }) {
  return (
    <div className={styles.popup__container}>
      <div className={styles.popup__header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.button}
          type="button"
          onClick={isClose}
        ></button>
      </div>
      {children}
    </div>
  );
}

export default Modal;
