import React from "react";
import Header from "./Header";
import "./barbers.css";

//images
import barber1 from "../images/barber1.png";
import barber2 from "../images/barber2.png";
import barber3 from "../images/barber3.png";
import barber4 from "../images/barber4.png";

export default function Barbers() {
  return (
    <div>
      <Header />
      <h3 className="barber-header">Crew profiles</h3>
      <div className="profile-container">
        <img className="profile-pic barbpic1" src={barber1} alt="barber-profile1" />
        <p className="barber-p barbp1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          eaque harum rerum excepturi quisquam! Numquam.
        </p>
        <img className="profile-pic barbpic2" src={barber2} alt="barber-profile2" />
        <p className="barber-p barbp2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id
          saepe temporibus, nisi inventore iure obcaecati cumque praesentium
          debitis natus?
        </p>
        <img className="profile-pic barbpic3" src={barber3} alt="barber-profile3" />
        <p className="barber-p barbp3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          eveniet aliquid sed, reprehenderit soluta architecto aperiam
          necessitatibus eos molestiae laudantium! Debitis soluta quae quo!
          Exercitationem reprehenderit labore tempora odio.
        </p>
        <img className="profile-pic barbpic4" src={barber4} alt="barber-profile4" />
        <p className="barber-p barbp4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          alias voluptatibus quae cumque sed eius eaque numquam natus magnam
          quo? Sit quasi hic dignissimos!
        </p>
      </div>
    </div>
  );
}
