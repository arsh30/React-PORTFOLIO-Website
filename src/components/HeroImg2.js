import "./heroImg2.css";
import React from "react";
// import HeroImg2 from "../assets/";

const HeroImg2 = ({ heading, text }) => {
  return (
    <div className="heroImg">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

/*
Background Img same rhegi -> contact page, and  about page 
bt heading is different on every page, so for this we use props

Jo heading hai and p tag inko as a props bhjege so that we can change that

- Here we are recieving the props from Projects.js
*/

export default HeroImg2;
