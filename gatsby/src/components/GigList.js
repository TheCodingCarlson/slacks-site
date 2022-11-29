import React from 'react';
import styled from 'styled-components';
import hasDatePassed from '../utils/hasDatePassed';

const GigListStyles = styled.ul`
  li {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: 2rem 0;
    font-size: 1.75rem;

    .venue {
      font-weight: 700;
    }

    &.past-gig {
      color: #f16ba0;
    }
  }
`;

const Gig = ({ gig }) => {
  const date = new Date(gig.date);
  return (
    <li className={hasDatePassed(date) ? 'past-gig' : null}>
      <span className="date">{`${
        date.getUTCMonth() + 1
      }-${date.getUTCDate()}-${date.getFullYear()}`}</span>
      <span className="venue">{gig.venue}</span>
      <span className="city-state">{gig.cityState}</span>
      {gig.isPrivate ? (
        <span className="gig-type">Private</span>
      ) : (
        <span>Public</span>
      )}
      {gig.eventUrl !== undefined && !hasDatePassed(date) ? (
        <a target="_blank" href={gig.eventUrl} rel="noreferrer">
          Go to Event
        </a>
      ) : null}
    </li>
  );
};

const GigList = ({ gigs }) => (
  <GigListStyles>
    {gigs.map((gig, index) => (
      <Gig key={`gig-${index + 1}`} gig={gig} />
    ))}
  </GigListStyles>
);

export default GigList;
