import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer.js';
import rootMiddleware from './middleware/root_middleware.js';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  // if there is a bootstrapped current_user, pass it in as preloaded state
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store } />, document.getElementById("root"));
});
