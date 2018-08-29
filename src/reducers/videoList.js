// import Redux from 'redux';
// import { CHANGE_VIDEO_LIST } from '../actions/currentVideo';

// var videoListReducer = (state = [], action) => {
//   //TODO: define a reducer for the videoList field of our state.
//   switch(action.type) {
//   	case CHANGE_VIDEO_LIST:
//     return state.concat([ action.videos ]);
//   default:
//   return state

//   }
// };

// export default videoListReducer;
import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return state;
};

export default videoListReducer;