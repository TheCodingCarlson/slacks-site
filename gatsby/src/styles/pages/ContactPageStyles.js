import styled from 'styled-components';

const ContactFormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  textarea {
    min-height: 300px;
    min-width: 100%;
  }

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    border: none;

    label {
      display: grid;
      gap: 1rem;
      align-content: start;
    }

    label + label {
      margin-top: 1rem;
    }

    button {
      background: var(--orange);
      color: var(--white);
      border: 2px sold var(--orange);
      border-radius: 5px;
      transition: all 0.2s;
    }
  }
`;

export default ContactFormStyles;
