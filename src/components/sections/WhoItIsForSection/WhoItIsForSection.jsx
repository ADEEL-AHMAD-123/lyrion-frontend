import React from 'react';
import './WhoItIsForSection.scss';
import SectionIntro from '../../common/SectionIntro/SectionIntro';

import mainImage from '../../../assets/images/Group 186 copy.svg';
import centerImage from '../../../assets/images/who_its_for_pattern.png';
import patternImg from '../../../assets/images/section_pattern.png'; 

const WhoItIsForSection = () => {
    return (
      <section className="who-it-is-for-section">
        <div className="section-content">
          <h1>Who It Is For</h1>
          <p>This section explains who can benefit the most from our service or offering.</p>
  
          <div className="images-wrapper">
            <img src={mainImage} alt="Main visual" className="main-image" />
            <img src={centerImage} alt="Center overlay" className="center-image" />
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoItIsForSection;
