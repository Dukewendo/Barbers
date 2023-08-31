import React from "react";
import Header from "./Header";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

//images
import phone from "../images/phone.png";
import email from "../images/email.png";

export default function Contact() {
  return (
    <div>
      <Header />
      <h3 className="page-title" data-aos="fade-right" data-aos-duration="5000">
        Contact
      </h3>

      <div className="contact-container">
        <button className="book-button">BOOK APPOINTMENT</button>
        <div className="contact-info">
          <h3 className="contact-header">CONTACT UNCLE B's</h3>
          <p className="small-address">113 House Street, Townsville</p>
          <div className="phone-details-container">
            <img src={phone} className="mobile-pic" alt="phone" />
            <p className="mobile-number">(+44) 84728395</p>
          </div>

          <div className="email-details-container">
            <img src={email} className="mail-pic" alt="email" />
            <p className="email-address">hello@UncleBs.com</p>
          </div>

          <div className="opening-time-container">
            <h3 className="opening-times">OPEN 7 DAYS A WEEK</h3>
            <p>Mon-Thurs 10AM - 9PM</p>
            <p>Fri 10AM - 7PM</p>
            <p>Sat 8AM - 6PM</p>
            <p>Sun 9AM - 5PM</p>
          </div>
        </div>
        <p className="contact-info"></p>
      </div>
    </div>
  );
}
