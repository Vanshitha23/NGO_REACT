import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* NGO Info */}
        <div className="footer-section">
          <h3 className="footer-title">Our NGO</h3>
          <p>
            Making a meaningful difference by supporting education, healthcare
            and women empowerment programs.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Our Volunteers</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> contact@ourngo.org</p>
          <p><FaMapMarkerAlt /> Hyderabad, Telangana, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Our NGO — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
