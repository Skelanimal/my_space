import React from "react";
import "./background.style.scss";
import falling_stars from "../../assets/falling_stars.m4v";

const MainBackground = () => (
  <video className="background-vid" autoPlay loop muted>
    <source src={falling_stars} type="video/mp4" />
  </video>
);

export default MainBackground;
