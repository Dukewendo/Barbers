import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"
import Header from "./Header";
import './home.css'

//images
import hero from "../images/hero.jpg"
import barbers from "../images/meetbarbers.jpg"
import chair from "../images/chair.jpg"
import tools from "../images/barbertools.jpg"



export default function Home() {

  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);




  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="hero-img">
        <img className="hero1" data-aos ="fade-up" data-aos-duration="5000" src={hero} alt="ishero?" />
      </div>
      <div className="barber-cards">
        <img className="card-image" data-aos ="fade-right" data-aos-duration="2000" src={barbers} alt="barbers" />
        <img className="card-image" data-aos ="ease-in" data-aos-duration="2000" src={chair} alt="barbers-chair" />
        <img className="card-image-tools" data-aos ="fade-left" data-aos-duration="2000" src={tools} alt="barbers-tools" />
      </div>
      <div className="main">
        <p className="home-p" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          architecto ipsa exercitationem harum tempora velit? Repudiandae
          mollitia aliquid molestias explicabo vitae, adipisci impedit dolorum,
          sed ratione ullam repellat nesciunt fuga.
        </p>
      </div>
    </div>
  );
}
