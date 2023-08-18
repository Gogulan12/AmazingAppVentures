import React from "react";

import "./Home.css";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import About from "../Components/About";
import VideoSection from "../Components/VideoSection";
import Brands from "../Components/Brands";
import Slideshow from "../Components/Slideshow";
import Faqsection from "../Components/Faqsection";

export default function Home() {
  return (
    <div className="homepage">
      <Navigation />
      <Hero />
      <About />
      <VideoSection />
      <Brands />
      <Slideshow />
      <Faqsection />
    </div>
  );
}
