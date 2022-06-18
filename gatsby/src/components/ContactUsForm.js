import React from 'react';
import useForm from '../utils/useForm';
import ContactUsFormStyles from '../styles/components/ContactUsFormStyles';

const ContactUsForm = () => {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
    phone: '',
    mapleSyrup: '',
  });

  return (
    <ContactUsFormStyles>
      <fieldset>
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
      <fieldset>
        <label htmlFor="phone">
          Phone Number
          <input
            id="phone"
            type="phone"
            name="phone"
            value={values.phone}
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
        <label htmlFor="message">Tell us more about what your event</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={updateValue}
        />
      </fieldset>
      <fieldset>
        <button className="button" type="submit">
          Submit
        </button>
      </fieldset>
    </ContactUsFormStyles>
  );
};

export default ContactUsForm;
