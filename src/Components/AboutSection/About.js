// import React from "react";
import React, { useEffect, useRef, useState } from "react";

import "./About.css";

import teamCollab from "../../Assets/TeamCollab.svg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      setIsVisible(rect.top <= windowHeight * 0.5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <div className="aboutsectioncontainer" id="about">
    <div
      className={`aboutsectioncontainer ${isVisible ? "visible" : ""}`}
      ref={aboutRef}
      id="about"
    >
      <div className="aboutSection">
        <div className="aboutImage">
          <img src={teamCollab} alt="" />
        </div>
        <div className="aboutContent">
          <h2>Who are we?</h2>
          <p>
            We are a team of highly-skilled facilitators with over 20 years of
            experience in designing and executing interactive, fun and engaging
            programs and events. It is in this spirit that we aspire to bring
            unique, mobile and creative experiences and solutions to both
            private vendors and the general public alike. It is our
            applications’ abilities to be completely customized and branded for
            every client’s needs and locales that makes these programs truly
            Amazing AppVentures™!
          </p>
        </div>
      </div>
    </div>
  );
}
