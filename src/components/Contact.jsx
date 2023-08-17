import React from "react";
import Header from "./Header";
import "./contact.css";

//images
import phone from "../images/phone.png";
import chat from "../images/speech-bubble.png";

export default function Contact() {
  return (
    <div>
      <Header />
      <h3 className="page-title">Contact us</h3>

      <div className="contact-container">
        <div className="telephone-container">
          <img className="mobile-pic" src={phone} alt="mobile-phone" />
          <p>Call us on 0782354553</p>
        </div>

        <div className="chat-container">
          <img className="chat-pic" src={chat} alt="chat-bubble" />
          <p>live chat</p>
        </div>
        <div className="form-container">
          <img className="chat-pic" src={chat} alt="chat-bubble" />
          <p>live chat</p>
        </div>

      </div>
    </div>
  );
}
