import React from 'react';
import './ContactUs.css'; // Ensure this file exists and is linked correctly
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import headerbg from "../assets/2_gfeim9.avif"

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src={headerbg}  // Adjust path if necessary
          alt="hero"
          className="hero-image"
        />
        <h1 className="hero-heading">Reach Out to Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="contact-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <p>Do you have a question?A Complaint? or need any help from AapnoSathi.Feel free to contact us.</p>
          <form>
            {/* First Name and Last Name */}
            <div className="input-row">
              <div className="input-group">
                <label className="input-label">First Name</label>
                <input type="text" placeholder="Enter your First Name" className="input-field" />
              </div>
              <div className="input-group">
                <label className="input-label">Last Name</label>
                <input type="text" placeholder="Enter your Last Name" className="input-field" />
              </div>
            </div>

            {/* Contact Number */}
            <div className="input-row">
            <div className="input-group">
              <label className="input-label">Contact Number</label>
              <input type="tel" maxLength="10" placeholder="Enter your Contact Number" className="input-field" />
            </div>

            {/* Email */}
            <div className="input-group">
              <label className="input-label">Email</label>
              <input type="email" placeholder="Enter your Email" className="input-field" />
            </div>
            </div>

            {/* Message */}
            <div className="input-group">
              <label className="input-label">Message</label>
              <textarea placeholder="Enter your Message" className="textarea-field"></textarea>
            </div>

             <div className='submit-section'><button type="submit" className="submit-btn">Send Message</button></div>   
            
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>We are always here to help you!</h3>

          {/* Additional SMS and Email Boxes */}
          <div className="extra-contact-boxes">
            <div className="contact-box">
              <h4>Send us an SMS</h4>
              <p>Reach out directly via SMS at <strong>1122334455</strong>.</p>
            </div>
            <div className="contact-box">
              <h4>Send us an Email</h4>
              <p>Email us at <strong>support@example.com</strong> for any inquiries.</p>
            </div>
          </div>
            
          {/* white line  */}
          <div className="custom-divider"></div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaInstagramSquare /></a>
            <a href="#"><FaTwitterSquare /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-container">
          <h3 className="faq-heading">Frequently Asked Questions</h3>
          <div className="faq-questions">
            <div className="faq-item">
              <p><strong>What is the Student-Friendly City Guide?</strong></p>
              <p>The Student-Friendly City Guide is a one-stop platform designed to help students navigate city life with ease. It provides personalized recommendations for accommodation, transportation, food, and local services, all tailored to a student-friendly budget.</p>
            </div>

            <div className="faq-item">
              <p><strong>Which cities are covered in the guide?</strong></p>
              <p>Currently, the guide is inspired by Jodhpur, but we plan to expand it to other cities in the near future.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
