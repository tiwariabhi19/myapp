import React from "react";
import "./index.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-column contact-us">
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> info@shivshaktitransport.com
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, Anytown, USA
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-column follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Shiv Shakti Transport. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
