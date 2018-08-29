import { connect } from 'react-redux';
// import VideoList from './../components/VideoList.js';
// import changeVideo from './../actions/currentVideo.js';
import { changeVideoList } from './../actions/VideoList.js';
import { bindActionCreators } from 'redux';
// var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
import React from 'react';
import VideoListEntry from './../components/VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeVideoList }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoList);