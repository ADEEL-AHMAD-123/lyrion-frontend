import React from 'react';
import './HowItWorksSection.scss';
import mainImage from '../../../assets/images/Group 192.png';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="section-content">
        <h1>How It Works</h1>
        <p>Understand the simple steps involved in using our platform or service.</p>

        <div className="images-wrapper">
          <img src={mainImage} alt="How it works" className="main-image" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
