import React from "react";

import "./Hero.css";
import apple from "../../Assets/apple.png";
import google from "../../Assets/google.png";
import onlineCollab from "../../Assets/onlineCollab.svg";
import circle from "../../Assets/circledots.svg";

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
          {/* Download Links */}
          <div className="heroButtons">
            <a
              href="https://play.google.com/store/apps"
              className="gplay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={google} alt="Google play download button" />
            </a>
            <a
              href="https://apps.apple.com/us/app/appventures-hunts-races/id1027275384"
              className="appstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={apple} alt="Apple Store download button" />
            </a>
          </div>
        </div>
        <div className="rightHeroSection">
          {/* Image */}
          <div className="peekContainer bounce-image">
            <img src={onlineCollab} alt="People working together on an app" />
          </div>
          {/* <img className="circle" src={circle} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
