import React, { useEffect } from "react";
import Header from "./Header";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

//images
import phone from "../images/small-phone.png";
import email from "../images/small-email.png";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <h3 className="page-title" data-aos="fade-right" data-aos-duration="5000">
        Contact
      </h3>
      <div className="contact-page-container">
        <div className="map-frame">
          <iframe
          className="iframe-map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7191.31798668985!2d-74.00955153185734!3d40.72733971295217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1693859366799!5m2!1sen!2suk"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-container">
        <div className="contact-info">
        </div>
        
          <div className="button-container">
            <button className="book-button">
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>
          <h3 className="contact-header">CONTACT UNCLE B's</h3>
          <p className="small-address">113 Flushing Ave, New York</p>
          <div className="phone-details-container">
            <img src={phone} className="mobile-pic" alt="phone" />
            <a href="tel:+4484728395" className="mobile-number">
              (+44) 84728395
            </a>
          </div>

          <div className="email-details-container">
            <img src={email} className="mail-pic" alt="email" />
            <a href="mailto:hello@UncleBs.com" className="email-address">
              hello@UncleBs.com
            </a>
          </div>

          <div className="opening-time-container">
            <h3 className="opening-title">OPEN 7 DAYS A WEEK</h3>
            <div className="weekday-times">
              <p>Mon-Thurs 10AM - 9PM</p>
              <p>Fri 10AM - 7PM</p>
              <p>Sat 8AM - 6PM</p>
              <p>Sun 9AM - 5PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
