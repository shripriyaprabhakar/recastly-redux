// import Redux from 'redux';
// import { CHANGE_VIDEO } from '../actions/currentVideo';

// const currentVideoReducer = (state = null, action) => {
//   //TODO: define a reducer for the currentVideo field of our state.
//   switch(action.type) {
//   	case CHANGE_VIDEO:
//     return (state = action.video)
//   default:
//   return state

//   }

// }

// export default currentVideoReducer;
import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return state;
};

export default currentVideoReducer;
