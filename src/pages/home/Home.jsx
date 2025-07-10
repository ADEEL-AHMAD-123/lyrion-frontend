import React from "react";
import Hero from "../../components/sections/Hero/Hero";
import EmpowerSection from "../../components/empower-section/EmpowerSection";
import "./Home.scss";

import pattern from '../../assets/images/pattern.png';
import howItWorksImg from '../../assets/images/how-its-work.jpeg';
import audienceImg from "../../assets/images/whos-it-for.png";
import glowImg from "../../assets/images/glows.png";
import mockupImg from "../../assets/images/Mockup.png";

const Home = () => {
  return (
    <>
      <Hero
        heading="Build, Monetize & Scale AI Agents with Ease"
        paragraph="Create powerful, intelligent bots to automate tasks, boost productivity, and grow your business—no coding required."
        buttonText="Get Started"
      />

      {/* Mockup specific to homepage */}
      <div className="hero-mockup-wrapper">
        <img src={glowImg} alt="glow" className="glow" />
        <img src={mockupImg} alt="mockup" className="mockup" />
      </div>

      <EmpowerSection />

      <section className="who-it-is-for-section">
        <img src={pattern} alt="pattern" className="pattern-bg" />
        <div className="image-wrapper">
          <img src={audienceImg} alt="Who it's for" />
        </div>
      </section>

      <section className="how-it-works-section">
        <img src={pattern} alt="pattern" className="pattern-bg" />
        {/* <div className="image-wrapper">
          <img src={howItWorksImg} alt="How it works" />
        </div> */}
      </section>
    </>
  );
};

export default Home;
