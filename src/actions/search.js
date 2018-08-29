import axios from 'axios';
import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

var handleVideoSearch = (query, videos) => {
 return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: query, max: 5}, (results) => {
      dispatch(changeVideoList(results));
      dispatch(changeVideo(results[0]));
    });
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
/*

return (dispatch) => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q, max: 5 }, (items) => {
      dispatch(changeVideoList(items));
      dispatch(changeVideo(items[0]));
    });
  }
};


*/