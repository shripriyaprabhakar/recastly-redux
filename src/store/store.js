import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducers from './reducers';
import rootReducer from './../reducers/main.js';
import ReduxPromise from 'redux-promise';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);