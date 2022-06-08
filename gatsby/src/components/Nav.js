import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    margin: 0;
    margin-top: -6rem;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }

  a {
    font-size: 3rem;
    text-decoration: none;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/gigs/">Gigs</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
