import React from "react";
import "./VisualBuilderSection.scss";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import { Check } from "lucide-react";
import integrationImg from "../../../assets/images/integration_card.png";
import performanceImg from "../../../assets/images/performance_card.png";

const features = [
    {
      title: "No-Code Visual Builder",
      text: "Build intelligent bots with zero technical knowledge.",
    },
    {
      title: "Multiple Bot Types",
      text: "Sales, support, marketing—create specialized bots for any function.",
    },
    {
      title: "White-Label Branding",
      text: "Customize your bots and dashboards with your own branding.",
    },
    {
      title: "Third-Party Integrations",
      text: "Connect seamlessly with Google, HubSpot, Slack, and more.",
    },
  ];
  

const VisualBuilderSection = () => {
  return (
    <section className="visual-builder-section">
      <div className="background-layer" />

      <div className="container">
        <SectionIntro
          heading="Powerful Features to Fuel Your Vision"
          paragraph="Lyrion AI gives you everything you need to go from idea to income."
          size="medium"
        />

        <div className="content-wrapper">
          {/* Left image */}
          <div className="left">
            <img src={integrationImg} alt="Integration Card" />
          </div>

          {/* Right content */}
          <div className="right">
          <div className="features-list">
  {features.map((item, i) => (
    <div className="feature" key={i}>
      <Check className="check-icon" />
      <div className="text-content">
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </div>
  ))}
</div>


            <div className="performance-image">
              <img src={performanceImg} alt="Performance Card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualBuilderSection;
