import React from "react";
import "./Contact.css"; // Create this CSS file for styling

function Contact() {
  return (
    <section className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          nisi commodo, viverra lectus vel, tristique ex. Aliquam in nibh id
          urna facilisis sollicitudin.
        </p>
      </div>
    </section>
  );
}

export default Contact;
