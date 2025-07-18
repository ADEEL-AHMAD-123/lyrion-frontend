import React, { useState } from "react";
import Hero from "../../components/common/Hero/Hero";
import EmpowerSection from "../../components/sections/EmpowerSection/EmpowerSection";
import "./HomePage.scss";
import howItWorksImg from "../../assets/images/How_its_work.png";
import centerImg from "../../assets/images/who_its_for_pattern.png";
import glowImg from "../../assets/images/glows.png";
import mockupImg from "../../assets/images/Mockup.png";
import audienceImg from "../../assets/images/Group 186 copy.svg";
import VisualBuilderSection from "../../components/sections/VisualBuilderSection/VisualBuilderSection";
import StartTemplatesSection from "../../components/sections/StartTemplatesSection/StartTemplatesSection";
import HomePricingSection from "../../components/sections/HomePricingSection/HomePricingSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection/TestimonialsSection";
import FaqSection from "../../components/sections/FaqSection/FaqSection";
import SectionIntro from "../../components/common/SectionIntro/SectionIntro";
import WhoItIsForSection from "../../components/sections/WhoItIsForSection/WhoItIsForSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection/HowItWorksSection";

const HomePage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouch = () => {
    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 1000);
  };

  return (
    <>
      <Hero
        heading="Build, Monetize & Scale AI Agents with Ease"
        paragraph="Create powerful, intelligent bots to automate tasks, boost productivity, and grow your business—no coding required."
        buttonText="Get Started"
      />

      {/* Homepage Mockup */}
      <div
        className={`hero-mockup-wrapper ${isFlipped ? "active" : ""}`}
        onTouchStart={() => {
          setIsFlipped(true);
          setTimeout(() => setIsFlipped(false), 1000);
        }}
      >
        <img src={mockupImg} alt="mockup" className="mockup" />
      </div>

      <EmpowerSection />
      <WhoItIsForSection />
      <HowItWorksSection />
      <VisualBuilderSection />
      <StartTemplatesSection />
      <HomePricingSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
