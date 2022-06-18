import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Footer = () => (
  <footer className="center">
    <button
      className="button"
      type="button"
      onClick={() => scrollTo('#header')}
    >
      Back to Top
    </button>
    <p>&copy; {new Date().getFullYear()} The Slacks Band</p>
  </footer>
);

export default Footer;
