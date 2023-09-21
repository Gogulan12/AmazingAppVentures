import React, { useEffect, useRef, useState } from "react";

import "./VideoSection.css";

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleScroll = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
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
      className={`videoSection ${isVisible ? "visible" : ""}`}
      ref={videoRef}
    >
      <h2>
        Watch{" "}
        <span className="title">
          Amazing <span className="titlecolorchange">AppVentures</span>{" "}
        </span>
        in Action
      </h2>
      <div className="video">
        <div className={`video-container ${isVideoPlaying ? "visible" : ""}`}>
          {isVideoPlaying ? (
            <iframe
              width="840"
              height="472.5"
              src="https://www.youtube.com/embed/IREniAC_7Dg"
              title="The AppMazing Hunt"
              frameborder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <div
                className="thumbnail-overlay"
                onClick={handleVideoClick}
              ></div>
              <div className="play-button" onClick={handleVideoClick}>
                Play Video
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
