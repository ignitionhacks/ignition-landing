// src/components/sections/Hero.jsx

// imports
import React from "react";
import "./Hero.css";

// Hero component
export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const redirectToPortal = () => {
    window.location.href = "https://portal.ignitionhacks.org";
  };

  return (
    <section className="hero">
      {/* --- NEW: Invisible Navigation Overlay --- */}
      <div className="signpost-container">
        <div
          className="sign-hitbox sign-about"
          onClick={() => scrollToSection("about-section")}
        ></div>
        <div
          className="sign-hitbox sign-faq"
          onClick={() => scrollToSection("faq")}
        ></div>
        <div
          className="sign-hitbox sign-gallery"
          onClick={() => scrollToSection("gallery")}
        ></div>
        <div
          className="sign-hitbox sign-stats"
          onClick={() => scrollToSection("stats")}
        ></div>
        <div
          className="sign-hitbox sign-sponsors"
          onClick={() => scrollToSection("sponsors")}
        ></div>
        <div
          className="sign-hitbox sign-team"
          onClick={() => scrollToSection("team")}
        ></div>
      </div>

      {/* content */}
      <div className="content">
        <h1>
          Virtual, Arts & Technology <br />
          Hackathon
        </h1>
        <p>August 21-22</p>
        <button onClick={redirectToPortal}>Apply Now!</button>
      </div>

      {/* What is Ignition Hacks section */}
      <div className="hero-description" id="about-section">
        <h2>What is Ignition Hacks</h2>
        <p>
          Ignition Hacks is a student-led hackathon built to empower the next
          generation of innovative minds. This year, we are creating more than
          just a hackathon, we want to use our platform to build an organization
          supporting education and opportunities for students to help.
        </p>
      </div>
    </section>
  );
}
