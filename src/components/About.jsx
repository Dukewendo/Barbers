import React from "react";
import Header from "./Header";
import "./about.css";
import aboutpic from "../images/aboutpic.png";
import aboutpic2 from "../images/aboutpic2.png";

export default function About() {
  return (
    <div>
      <Header />
      <h3 className="page-title">Our goals</h3>
      <div className="about-container">
        <img className="about-img" src={aboutpic} alt="bighair" />

        <p className="about-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde maxime, vero vel repellendus nisi harum sed similique expedita
          saepe cum fugit, animi perspiciatis omnis ex id blanditiis illum
          minima!
        </p>
        <img className="about-img2" src={aboutpic2} alt="tools" />

        <p className="about-p2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ab
          magnam sint pariatur optio provident, asperiores necessitatibus
          nesciunt omnis illo?
        </p>
      </div>
    </div>
  );
}
