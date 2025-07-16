import React from "react";
import "./CTA.scss";
import ctaImage from "../../../assets/images/cta-pattern.png";
import ctaImage2 from "../../../assets/images/cta_pattern_2.png";
import PrimaryButton from "../../common/primary button/PrimaryButton";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="background-layer" />

      <div className="container">
        <div className="cta-content">
          <img src={ctaImage} alt="CTA Visual" className="cta-top-image" />
          <img src={ctaImage2} alt="CTA Visual" className="cta-top-image" />
          <h2>
            Ready to Automate & Scale?
            <br />
            Start Your Free Trial Today!
          </h2>
          <PrimaryButton text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
