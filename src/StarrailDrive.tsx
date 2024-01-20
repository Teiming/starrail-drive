import React from 'react';
import Main from './Main';
import Nav from './Nav/Nav';
import { Provider } from 'react-redux';
import store from './store';

export default function StarrailDrive() {
  return (
    <Provider store={store}>
      <Main />
      <Nav />
    </Provider>
  );
}
