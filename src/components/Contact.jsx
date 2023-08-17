import React from "react";
import Header from "./Header";
import "./contact.css";

//images
import phone from "../images/phone.png";
import chat from "../images/speech-bubble.png";
import form from "../images/form.png";

export default function Contact() {
  return (
    <div>
      <Header />
      <h3 className="page-title">Contact us</h3>

      <div className="contact-container">
        <div className="telephone-container">
          <img className="mobile-pic" src={phone} alt="mobile-phone" />
          <p className="mobile-number">Call us xxxxxxxxxxx</p>
        </div>

        <div className="chat-container">
          <img className="chat-pic" src={chat} alt="chat-bubble" />
          <p className="livechat">Live chat</p>
        </div>
        <div className="form-container">
          <img className="form-pic" src={form} alt="contact-form" />
          <p className="contactform">Send email</p>
        </div>
        <div className="opening-hours">
          <p className="timep">Opening hours:</p>
          <p className="timep2">Mon-Fri: 8am-6pm</p>
          <p className="timep3">Sat: 10am-4pm</p>
        </div>
      </div>
     
    </div>
  );
}
