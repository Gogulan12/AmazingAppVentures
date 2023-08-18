import React from "react";

import phone from "../Assets/phone.png";
import image from "../Assets/mobileAppUndraw.svg";
import "./Hero.css";
import apple from "../Assets/apple.svg";
import google from "../Assets/google.svg";

export default function Hero() {
  return (
    <div className="HeroSectionContainer">
      <div className="HeroSection">
        <div className="leftHeroSection">
          <h1>Amazing AppVentures</h1>
          <h2>
            The most advanced and fun gamification platform for corporations,
            museums and travel providers.
          </h2>
          <div className="heroButtons">
            <a href="#" className="gplay">
              <img src={google} alt="" />
            </a>
            <a href="#" className="appstore">
              <img src={apple} alt="" />
            </a>
          </div>
        </div>
        <div className="rightHeroSection">
          <div className="peekContainer">
            {/* <img className="peekImage" src={phone} alt="phone" /> */}
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
