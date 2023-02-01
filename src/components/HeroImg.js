import "./heroimgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="heroSection">
      <div className="mask">
        <img src={IntroImg} className="intro-img" alt="introImg" />
      </div>

      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer</h1>
        <div>
          {/* Link because button hai uspr click page change hora hai */}
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
