import React from 'react';
import useForm from '../utils/useForm';
import ContactUsFormStyles from '../styles/components/ContactUsFormStyles';

const ContactUsForm = () => {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(process.env.EMAIL_BLOCK_LIST);

    if (!process.env.EMAIL_BLOCK_LIST.includes(values.email)) {
      e.target.submit();

    }
  }

  return (
    <ContactUsFormStyles
      onSubmit={submitForm}
      method="post"
      action={process.env.GETFORM_API_ENDPOINT}
    >
      <fieldset>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
            required
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
            required
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
            placeholder="Optional"
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="message">Tell us more about what your event</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={updateValue}
          required
        />
      </fieldset>
      <input
        type="hidden"
        name="_gotcha"
        style={{ display: 'none !important' }}
      />
      <fieldset>
        <button className="button" type="submit">
          Submit
        </button>
      </fieldset>
    </ContactUsFormStyles>
  );
};

export default ContactUsForm;
