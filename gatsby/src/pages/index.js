import React from 'react';
import Video from '../components/Video';

const HomePage = () => (
  <>
    <h1>Home Page</h1>
    <Video
      videoSrcURL="https://www.youtube.com/embed/vtYNV56MvxU"
      videoTitle="The Slacks at the Tractor Tavern in Seattle, WA"
    />
  </>
);

export default HomePage;
