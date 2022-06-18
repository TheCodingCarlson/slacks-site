import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    margin: 2rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
    }
  }

  li {
    margin: 0.5rem 0;
    display: flex;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  button {
    transition: all 0.5s ease-in-out;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  button:hover {
    color: var(--orange);
    text-decoration: underline;
  }
`;

export default NavStyles;
