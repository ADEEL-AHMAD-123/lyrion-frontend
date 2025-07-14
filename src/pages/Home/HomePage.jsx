import React from "react";
import Hero from "../../components/common/Hero/Hero";
import EmpowerSection from "../../components/sections/EmpowerSection/EmpowerSection";
import "./HomePage.scss";
import howItWorksImg from '../../assets/images/How_its_work.png';
import audienceImg from "../../assets/images/who_its_for.png";
import glowImg from "../../assets/images/glows.png";
import mockupImg from "../../assets/images/Mockup.png";
import VisualBuilderSection from "../../components/sections/VisualBuilderSection/VisualBuilderSection";

const HomePage = () => {
  return (
    <>
      <Hero
        heading="Build, Monetize & Scale AI Agents with Ease"
        paragraph="Create powerful, intelligent bots to automate tasks, boost productivity, and grow your business—no coding required."
        buttonText="Get Started"
      />

      {/* Mockup specific to homepage */}
      <div className="hero-mockup-wrapper">
      <div className="background-layer" />
        <img src={mockupImg} alt="mockup" className="mockup" />
      </div>

      <EmpowerSection />

      <section className="who-it-is-for-section">
      <div className="background-layer" />
        <div className="image-wrapper">
          <img src={audienceImg} alt="Who it's for" />
        </div>
      </section>

      <section className="how-it-works-section">
      <div className="background-layer" />
        <div className="image-wrapper">
          <img src={howItWorksImg} alt="How it works" />
        </div>
      </section>
      <VisualBuilderSection/>
    </>
  );
};

export default HomePage;