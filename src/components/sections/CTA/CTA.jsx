import React from "react";
import "./CTA.scss";
import pattern from "../../../assets/images/cta-pattern.png"; 
import PrimaryButton from '../../common/primary button/PrimaryButton'
const CTA = () => {
  return (
    <section className="cta-section">
      <img src={pattern} alt="background pattern" className="cta-pattern" />
      <div className="cta-content">
        <h2>
          Ready to Automate & Scale?
          <br />
          Start Your Free Trial Today!
        </h2>
<PrimaryButton
text={"Get Started"}
/>
      </div>
    </section>
  );
};

export default CTA;
