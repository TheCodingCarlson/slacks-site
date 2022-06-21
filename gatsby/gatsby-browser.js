import React from 'react';
import Layout from './src/components/Layout';

// Fonts
import '@fontsource/varela-round';
import '@fontsource/ribeye';
import '@fontsource/bebas-neue';

// React Lite YouTube Embed Styles
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
