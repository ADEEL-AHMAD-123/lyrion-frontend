// src/components/sections/Hero/Hero.jsx
import React from 'react';
import './_hero.scss';
import heroPattern from '../../../assets/images/pattern.png';
import mockupImg from '../../../assets/images/Mockup.png'; 
import glowImg from '../../../assets/images/glows.png'; 

const Hero = () => {
    return (
      <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <img src={heroPattern} alt="pattern" className="hero-pattern" />
          <h1>Build, Monetize & Scale AI Agents with Ease</h1>
          <p>Create powerful, intelligent bots to automate tasks, boost productivity, and grow your business—no coding required.</p>
          <button className="btn-primary">Get Started</button>
        </div>
    
        <div className="hero-mockup-wrapper">
          <img src={glowImg} alt="glow" className="glow" />
          <img src={mockupImg} alt="mockup" className="mockup" />
        </div>
      </div>
    </section>
    
    
    );
  };
  
  export default Hero;