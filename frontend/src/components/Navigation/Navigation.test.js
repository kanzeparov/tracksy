import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

const mockStore = configureMockStore([thunk]);

const links = [
  { text: 'Home', href: '/' },
  { text: 'Sign Up', href: '/signup' },
  { text: 'Log In', href: '/signin' },
];

test.each(links)('render nav links by default', (link) => {
  const store = mockStore({
    user: { isLoggedIn: false },
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
  );

  const linkDom = screen.getByText(link.text);
  expect(linkDom).toHaveAttribute('href', link.location);
});
