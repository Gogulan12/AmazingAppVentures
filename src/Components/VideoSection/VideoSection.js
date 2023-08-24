import React from "react";

import { useState } from "react";
import "./VideoSection.css";

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };
  return (
    <div className="videoSection">
      <h2>
        Watch{" "}
        <span className="title">
          Amazing <span className="titlecolorchange">AppVentures</span>{" "}
        </span>
        in Action
      </h2>
      <div className="video">
        <div className="video-container">
          {isVideoPlaying ? (
            <iframe
              title="YouTube Video"
              width="840"
              height="472.5"
              src="https://www.youtube.com/embed/lyKd9qD51fo"
              frameBorder="0"
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
