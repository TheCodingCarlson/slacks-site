import React from 'react';
import { Link } from 'gatsby';
import NavStyles from '../styles/components/NavStyles';

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <button type="button" onClick={() => console.log('clicked nav button')}>
          About Us
        </button>
      </li>
      <li>
        <button type="button" onClick={() => console.log('clicked nav button')}>
          Photos
        </button>
      </li>
      <li>
        <button type="button" onClick={() => console.log('clicked nav button')}>
          Shows
        </button>
      </li>
      <li>
        <button type="button" onClick={() => console.log('clicked nav button')}>
          Song List
        </button>
      </li>
      <li>
        <button type="button" onClick={() => console.log('clicked nav button')}>
          Partners
        </button>
      </li>
      <li>
        <Link to="/contact/">Contact Us</Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
