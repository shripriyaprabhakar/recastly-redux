
import React from 'react';
import { connect } from 'react-redux';
// import VideoPlayer from '../components/VideoPlayer.js';
import { bindActionCreators } from 'redux';
import { changeVideo } from './../actions/currentVideo.js';

// var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
var VideoPlayer = ({video}) => (
  !video
    ? <div className="video-player">Please wait...</div>
    : <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoPlayer);


VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};
