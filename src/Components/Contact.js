import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Header / Info Section */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are happy to connect with you! Join us in our social and spiritual
          efforts to empower society through awareness, values, and collective action.
        </p>
      </section>

      {/* Contact Details + Form */}
      <section className="contact-main">
        
        {/* Left Side — Details */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p><FaPhoneAlt /> +91 98765 54321</p>
          <p><FaEnvelope /> prema.ananda.society@gmail.com</p>
          <p><FaMapMarkerAlt /> Telangana, India</p>
          
          <div className="social-links">
            <a href="#">
              <FaFacebook /> Follow Us on Facebook
            </a>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>

            <button type="submit" className="send-btn">Send Message</button>
          </form>

        </div>
      </section>

    </div>
  );
};

export default Contact;
