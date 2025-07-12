import React from 'react';
import './_hero.scss';
import PrimaryButton from '../../common/primary button/PrimaryButton';

const Hero = ({ heading, paragraph, buttonText }) => {
  return (
<section className="hero-section">
  <div className="background-layer" />
  <div className="container">
    <div className="hero-content">
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <PrimaryButton text={buttonText} to="#" />
    </div>
  </div>
</section>

  );
};

export default Hero;
