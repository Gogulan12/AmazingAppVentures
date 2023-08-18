import React, { useState } from "react";
import slide1 from "../Assets/slides/gameslide1.png";
import slide2 from "../Assets/slides/gameslide2.png";
import slide3 from "../Assets/slides/gameslide3.png";
import slide4 from "../Assets/slides/gameslide4.png";
import slide5 from "../Assets/slides/gameslide5.png";

import "./Slideshow.css";

const images = [slide1, slide2, slide3, slide4, slide5];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <button className="arrow-button prev" onClick={goToPrevSlide}>
        &#8592;
      </button>
      <div className="imageinslide">
        <img src={images[currentIndex]} alt={` ${currentIndex + 1}`} />
      </div>
      <button className="arrow-button next" onClick={goToNextSlide}>
        &#8594;
      </button>
    </div>
  );
}

export default Slideshow;
