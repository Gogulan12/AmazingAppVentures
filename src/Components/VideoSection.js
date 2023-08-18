import React from "react";

import "./VideoSection.css";

export default function VideoSection() {
  return (
    <div className="videoSection">
      <div className="video">
        <iframe
          width="840"
          height="472.5"
          src="https://www.youtube.com/embed/lyKd9qD51fo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
