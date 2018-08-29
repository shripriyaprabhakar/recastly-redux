// import { combineReducers } from 'redux';
// import currentVideo from './currentVideo.js';
// import videoList from './videoList.js';

// // var rootReducer = () => {};

// //TODO: define the root reducer for this app

// //HINT: you'll need to combine the other two reducers in this
// //  app into a single reducer using the 'combineReducers' method
// //  listed above.

// const rootReducer = combineReducers({
//   video: currentVideo,
//   videos: videoList
// });


// export default rootReducer;


import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({currentVideo: currentVideo, videoList: videoList});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
