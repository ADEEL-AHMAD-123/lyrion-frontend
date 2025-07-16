import React from "react";
import Hero from "../../components/common/Hero/Hero";
import "./Features.scss";
import featuresImg from "../../assets/images/features.png";
const featuresHeroContent = {
  heading: "Lyrion AI Features",
  paragraph:
    "Powerful tools to design, deploy, and manage intelligent AI agents that transform your business.",
  buttonText: "Get Started",
};

const Features = () => {
  return (
    <>
      <Hero
        heading={featuresHeroContent.heading}
        paragraph={featuresHeroContent.paragraph}
        buttonText={featuresHeroContent.buttonText}
      />

      <section className="features-banner-section">
        <div className="background-layer" />
        <div className="image-wrapper">
          <img src={featuresImg} alt="Lyrion AI Features" />
        </div>
      </section>
    </>
  );
};

export default Features;
