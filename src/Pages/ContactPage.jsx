
import React from 'react';
import '../ContactPage.css'
import SubmitForm from '../components/SubmitForm';

const Contact = () => {
  return (
    <>
    <header>
      <h1>Contact Us For More Information</h1>
    </header>

    <section>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" style={{ color: '#f9d3b4', backgroundColor: 'grey' }}>Submit</button>
      </form>
    </section>
  </>
);
};
  
export default Contact;