import React, { useEffect, useRef, useState } from "react";

//////////////////////////Images for Slide////////
import slide1 from "../../Assets/slides/gameslide1.png";
import slide2 from "../../Assets/slides/gameslide2.png";
import slide3 from "../../Assets/slides/gameslide3.png";
import slide4 from "../../Assets/slides/gameslide4.png";
import slide5 from "../../Assets/slides/gameslide5.png";

import "./Slideshow.css";

import leftarrow from "../../Assets/left.svg";
import rightarrow from "../../Assets/right.svg";

const images = [slide1, slide2, slide3, slide4, slide5];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const slideshowRef = useRef(null);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleScroll = () => {
    if (slideshowRef.current) {
      const rect = slideshowRef.current.getBoundingClientRect();
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
    <div
      className={`slider-container ${isVisible ? "visible" : ""}`}
      ref={slideshowRef}
    >
      <button onClick={handlePrev} className="slider-button prev-button">
        <img src={leftarrow} alt="" />
      </button>
      <div className="image-slider">
        <div
          className="image-slide"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((imageUrl, index) => (
            // images displayed for slide
            <img
              key={index}
              src={imageUrl}
              alt={`Slide ${index}`}
              className="slide-image"
            />
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="slider-button next-button">
        <img src={rightarrow} alt="" />
      </button>
    </div>
  );
};

export default Slideshow;
