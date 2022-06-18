import { createGlobalStyle } from 'styled-components';

// Fonts
import '@fontsource/varela-round';
import '@fontsource/ribeye';

const GlobalStyles = createGlobalStyle`
  :root {
    --orange: #e7942f;
    --white: #fdfff5;
    --grey: #efefef;
    --purple: #1C0136;
    --violet: #941892;
  }

  html {
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
  }

  body {
    background: var(--purple);
    color: var(--white);
    font-family: "Varela Round", sans-serif;
    font-size: 2rem;
  }

  button {
    background: transparent;
    color: var(--white);
    border: 0;
    padding: 0.6rem 1rem;
    cursor: pointer;
  }

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--orange);
      text-decoration: underline;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .header {
    font-size: 2.5rem;
    color: var(--orange);
    font-family: "Ribeye", cursive;
    text-align: center;
    margin: 4rem 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .button {
    background: var(--violet);
    color: var(--white);
    border: 2px solid transparent;
    border-radius: 5px;
    transition: all 0.2s;
    padding: 0.75rem 1rem;

    &:hover,
    &:focus {
      color: var(--violet);
      background: var(--white);
      border: 2px solid var(--violet);
    }
  }

  .hide {
    display: none !important;
  }

  .center {
    text-align: center;
  }

  .text-medium {
    font-size: 1.75rem;
  }

  .content-section {
    margin: 4rem 0;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
`;

export default GlobalStyles;
