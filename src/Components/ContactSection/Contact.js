import React from "react";

import "./Contact.css"; // Create this CSS file for styling

// import phones from "../../Assets/phones.jpg";
// import phones from "../../Assets/phones-removebg-preview.png";
import phones from "../../Assets/peopleholdingphones.png";

function Contact() {
  return (
    <div className="contactSection" id="contact">
      <section className="contact-us">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
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
      <section className="liveDemoSection">
        <div className="liveDemoImage">
          <img src={phones} alt="" />
        </div>
        <div className="liveDemoText">
          <h2>
            Let’s schedule a <br />
            live demo
          </h2>
          <p>
            Let's have a chat and let us introduce you the future of corporate
            game platforms.
          </p>
          <button>Schedule a Call</button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
