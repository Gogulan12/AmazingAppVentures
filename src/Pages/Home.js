import React from "react";

import "./Home.css";

// /////////////// COMPONENTS ////////////////////////
import Navigation from "../Components/NavigationSection/Navigation";
import Hero from "../Components/HeroSection/Hero";
import About from "../Components/AboutSection/About";
import VideoSection from "../Components/VideoSection/VideoSection";
import Brands from "../Components//BrandSection/Brands";
import Slideshow from "../Components/SlideSection/Slideshow";
import Faqsection from "../Components/FaqSection/Faqsection";
import Footer from "../Components/FooterSection/Footer";
import Contact from "../Components/ContactSection/Contact";
import BackToTopButton from "../Components/BacktoTop/BackToTopButton";

export default function Home() {
  return (
    <div className="homepage">
      <BackToTopButton />
      <Navigation />
      <Hero />
      <About />
      <VideoSection />
      <Brands />
      <Slideshow />
      <Faqsection />
      <Contact />
      <Footer />
    </div>
  );
}
