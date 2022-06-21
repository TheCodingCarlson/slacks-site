import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const QuoteStyles = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  .quote {
    font-size: 3rem;
    margin: 1rem 0;
  }

  .author {
    font-size: 1.5rem;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const QuoteCarousel = ({ quotes }) => (
  <Slider {...settings}>
    {quotes.map((quote, index) => (
      <div key={`quote-${index + 1}`}>
        <QuoteStyles>
          <p className="quote">{quote.quote}</p>
          {quote.author !== undefined ? (
            <p className="author"> - {quote.author}</p>
          ) : null}
        </QuoteStyles>
      </div>
    ))}
  </Slider>
);

export default QuoteCarousel;
