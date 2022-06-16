import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import Footer from './Footer';

import GlobalStyles from '../styles/GlobalStyles';

const SiteStyles = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 5px;

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <SiteStyles>
        <ContentStyles>
          {children}
          <Footer />
        </ContentStyles>
      </SiteStyles>
    </>
  );
}
