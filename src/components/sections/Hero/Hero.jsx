import React from 'react';
import './_hero.scss';
import heroPattern from '../../../assets/images/pattern.png';
import PrimaryButton from '../../common/primary button/PrimaryButton';

const Hero = ({ heading, paragraph, buttonText }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <img src={heroPattern} alt="pattern" className="hero-pattern" />
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <PrimaryButton text={buttonText} to="#"  />

        </div>
      </div>
    </section>
  );
};

export default Hero;
