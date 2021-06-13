import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalOverlay from './components/popups/modal-overlay/modal-overlay';
import Modal from './components/popups/modal/modal';
import LoginPopup from './components/popups/login/login';
import ApplicationDetails from './components/popups/applications-details/application-details';
import {
  CLOSE_SERVICE_MODAL,
  CLOSE_LOGIN_MODAL,
} from './actions/servicesActions';
// import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { serviceModalOpen, servicesLoginModal } = useSelector(
    (state) => state.services
  );
  function closeAllPopups() {
    dispatch({ type: CLOSE_SERVICE_MODAL });
    dispatch({ type: CLOSE_LOGIN_MODAL });
  }

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeAllPopups();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
    // eslint-disable-next-line
  }, []);

  const handleOverlayClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    closeAllPopups();
  };

  return (
    <>
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}

      <ModalOverlay
        isOpen={serviceModalOpen}
        handleOverlayClose={handleOverlayClose}
      >
        <Modal title="" isClose={closeAllPopups}>
          <ApplicationDetails />
        </Modal>
      </ModalOverlay>

      <ModalOverlay
        isOpen={servicesLoginModal}
        handleOverlayClose={handleOverlayClose}
      >
        <Modal title="" isClose={closeAllPopups}>
          <LoginPopup />
        </Modal>
      </ModalOverlay>
    </>
  );
}

export default App;
