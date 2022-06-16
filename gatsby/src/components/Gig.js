import React from 'react';
import styled from 'styled-components';

const GigListStyles = styled.ul``;

const Gig = ({ date, venue, cityState, isPrivate = false }) => (
  <li>
    <span className="">{date}</span>
    <span className="">{venue}</span>
    <span className="">{cityState}</span>
    {isPrivate ? <span className="">Private</span> : <span>Public</span>}
  </li>
);

const GigList = (...gigs) => (
  <GigListStyles>
    {gigs.map((gig) => (
      <Gig gig={gig} />
    ))}
  </GigListStyles>
);

export default GigList;
