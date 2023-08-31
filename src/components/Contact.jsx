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
          <img src={phone} className="mobile-pic" alt="phone" />
          <img src={email} className="mail-pic" alt="email" />

        </div>
        <p className="contact-info"></p>
      </div>
    </div>
  );
}
