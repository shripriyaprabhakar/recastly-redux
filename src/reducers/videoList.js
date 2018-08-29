import Redux from 'redux';
import { CHANGE_VIDEO_LIST } from '../actions/currentVideo';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type) {
  	case CHANGE_VIDEO_LIST:
    return state.concat([ action.videos ]);
  default:
  return state

  }
};

export default videoListReducer;
