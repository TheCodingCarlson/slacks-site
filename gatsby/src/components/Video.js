import React from 'react';
import VideoStyles from '../styles/components/VideoStyles';

export default function Video({ videoSrcURL, videoTitle, ...props }) {
  return (
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
}
