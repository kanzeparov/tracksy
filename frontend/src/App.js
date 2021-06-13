import React from 'react';
import ModalOverlay from './components/popups/modal-overlay/modal-overlay';
import Modal from './components/popups/modal/modal';
import ApplicationDetails from './components/popups/applications-details/application-details';
// import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';

const App = () => (
  <>
    {/* <Header /> */}
    <Main />
    {/* <Footer /> */}

    <ModalOverlay>
      <Modal title="">
        <ApplicationDetails />
      </Modal>
    </ModalOverlay>
  </>
);

export default App;
