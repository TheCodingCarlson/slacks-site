import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import NavStyles from '../styles/components/NavStyles';

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <button type="button" onClick={() => scrollTo('#about')}>
          About Us
        </button>
      </li>
      <li>
        <button type="button" onClick={() => scrollTo('#photos')}>
          Photos
        </button>
      </li>
      <li>
        <button type="button" onClick={() => scrollTo('#shows')}>
          Shows
        </button>
      </li>
      <li>
        <button type="button" onClick={() => scrollTo('#songs')}>
          Song List
        </button>
      </li>
      <li>
        <button type="button" onClick={() => scrollTo('#partners')}>
          Partners
        </button>
      </li>
      <li>
        <button type="button" onClick={() => scrollTo('#contact-us')}>
          Contact Us
        </button>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
