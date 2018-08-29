import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import ReduxPromise from 'redux-promise';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);