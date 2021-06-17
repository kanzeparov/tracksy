import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalOverlay from './components/popups/modal-overlay/modal-overlay';
import './app.css';
import Modal from './components/popups/modal/modal';
import LoginPopup from './components/popups/login/login';
import ApplicationDetails from './components/popups/applications-details/application-details';
import {
  CLOSE_SERVICE_MODAL,
  CLOSE_LOGIN_MODAL,
} from './actions/servicesActions';
import Header from './components/Header/Header';
import Home from './pages/Home';
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
      <main className="app">
        <Header />
        <div className="section-title">
          <h1 className="home__title home__title_color_black">
            Сервисы и приложения
          </h1>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/calendar">
            <p>2142412</p>
          </Route>
        </Switch>
      </main>

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
