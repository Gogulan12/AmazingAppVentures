import React, { useState, useEffect } from "react";
import "./BackToTopButton.css";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className={`back-to-top-btn ${isVisible ? "show-btn" : ""}`}>
      Back to Top
    </a>
  );
}

export default BackToTopButton;
