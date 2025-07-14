import React from 'react';
import './_hero.scss';
import SectionIntro from '../SectionIntro/SectionIntro';

const Hero = ({ heading, paragraph, buttonText }) => {
  return (
    <section className="hero-section">
      <div className="background-layer" />
      <div className="container">
        <SectionIntro heading={heading} paragraph={paragraph} buttonText={buttonText} />
      </div>
    </section>
  );
};

export default Hero;
