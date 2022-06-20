import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { Helmet } from 'react-helmet';

import Footer from './Footer';
import SEO from './SEO';

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
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <SEO />
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
