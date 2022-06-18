import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const SiteHeaderStyles = styled.div`
  display: flex;
  justify-content: center;
`;

const SiteHeader = () => (
  <SiteHeaderStyles id="header">
    <StaticImage src="../assets/images/site-header.png" alt="The Slacks band" />
  </SiteHeaderStyles>
);

export default SiteHeader;
