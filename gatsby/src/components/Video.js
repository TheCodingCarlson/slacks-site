import React from 'react';
import VideoStyles from '../styles/components/VideoStyles';

const Video = ({ videoSrcURL, videoTitle }) => (
  <VideoStyles>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoStyles>
);

export default Video;
