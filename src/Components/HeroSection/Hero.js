import React from "react";

// import phone from "../Assets/phone.png";
// import mobileappimage from "../../Assets/mobileAppUndraw.svg";
import "./Hero.css";
import apple from "../../Assets/apple.png";
import google from "../../Assets/google.png";
import onlineCollab from "../../Assets/onlineCollab.svg";

export default function Hero() {
  return (
    <div className="HeroSectionContainer">
      <div className="HeroSection">
        <div className="leftHeroSection">
          <h1>
            Amazing <br />
            <span>AppVentures</span>
          </h1>
          <h2>
            The most advanced and fun gamification platform for corporations,
            museums and travel providers.
          </h2>
          <div className="heroButtons">
            <a
              href="https://play.google.com/store/apps"
              className="gplay"
              target="_blank"
              rel="noopener"
            >
              <img src={google} alt="" />
            </a>
            <a
              href="https://apps.apple.com/us/app/appventures-hunts-races/id1027275384"
              className="appstore"
              target="_blank"
              rel="noopener"
            >
              <img src={apple} alt="" />
            </a>
          </div>
        </div>
        <div className="rightHeroSection">
          <div className="peekContainer bounce-image">
            {/* <img className="peekImage" src={phone} alt="phone" /> */}
            <img src={onlineCollab} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
