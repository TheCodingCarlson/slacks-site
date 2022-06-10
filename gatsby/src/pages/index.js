import React from 'react';
import Video from '../components/Video';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Video
        videoSrcURL="https://www.youtube.com/embed/vtYNV56MvxU"
        videoTitle="The Slacks at the Tractor Tavern in Seattle, WA"
      />
    </>
  );
}
