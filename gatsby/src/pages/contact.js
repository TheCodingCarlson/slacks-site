import React from 'react';
import { Link } from 'gatsby';
import useForm from '../utils/useForm';
import ContactFormStyles from '../styles/pages/ContactPageStyles';

export default function ContactPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
    mapleSyrup: '',
  });

  return (
    <>
      <h1>Contact Page</h1>
      <Link to="/">Home</Link>
      <ContactFormStyles>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
        </fieldset>
        <fieldset className="hide">
          <input
            type="text"
            name="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset>
          <legend>Tell us more about what you are looking for</legend>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </ContactFormStyles>
    </>
  );
}
