
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
import { Provider } from 'react-redux';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
  </Provider>,
  document.getElementById('app')
);



// import ReactDOM from 'react-dom';
// import React from 'react';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';

// import reducers from './reducers/main.js';
// import App from './components/App.js';
// import searchYouTube from './lib/searchYouTube.js';
// import YOUTUBE_API_KEY from './config/youtube.js';
// import store from './store/store.js';


// //TODO: Import the Provider component from 'react-redux' here!

// //TODO: Use the Provider component to make your store available to
// //  the rest of your app.
// // const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
//   </Provider>,
//   document.getElementById('app')
// );
