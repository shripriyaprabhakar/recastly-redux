import axios from 'axios';
import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

var handleVideoSearch = (q, videos) => {
	const url = searchYouTube;
	const request = axios.get(url);
 return {
    type: FETCH_VIDEOS,  
  	videos
  } 
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
