import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>
);

export default App;
