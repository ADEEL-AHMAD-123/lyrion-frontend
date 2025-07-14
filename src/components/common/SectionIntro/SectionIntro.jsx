import React from 'react';
import './SectionIntro.scss';
import PrimaryButton from '../primary button/PrimaryButton';

const SectionIntro = ({ heading, paragraph, buttonText, to = "#", size = "large" }) => {
  return ( 
    <div className={`hero-content-wrapper ${size}`}>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      {buttonText && <PrimaryButton text={buttonText} to={to} />}
    </div>
  );
};

export default SectionIntro;
