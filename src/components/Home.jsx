import React from "react";
import Header from "./Header";

//images
import hero from "../images/hero.jpg"
import barbers from "../images/meetbarbers.jpg"
import chair from "../images/chair.jpg"
import tools from "../images/barbertools.jpg"

export default function Home() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="hero-img">
        <img src={hero} alt="ishero?" />
      </div>
      <div className="barber-cards">
        <img className="card-image" src={barbers} alt="barbers" />
        <img className="card-image" src={chair} alt="barbers-chair" />
        <img className="card-image-tools" src={tools} alt="barbers-tools" />
      </div>
      <div className="main">
        <h3>Small about paragraph</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          architecto ipsa exercitationem harum tempora velit? Repudiandae
          mollitia aliquid molestias explicabo vitae, adipisci impedit dolorum,
          sed ratione ullam repellat nesciunt fuga.
        </p>
        <button>Book appointment</button>
      </div>
    </div>
  );
}
