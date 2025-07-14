import React from "react";
import "./MissionVisionSection.scss";
import { Check } from "lucide-react";
import SectionIntro from "../../common/SectionIntro/SectionIntro";

const missionPoints = [
  {
    title: "Empowering Businesses with AI",
    text: "Provide businesses with easy-to-use AI tools for seamless automation.",
  },
  {
    title: "Democratizing AI",
    text: "Make AI tools available to businesses of all sizes.",
  },
  {
    title: "No-Code, Scalable Automation",
    text: "Make automation accessible to everyone with no coding required.",
  },
 
  {
    title: "Driving Business Efficiency",
    text: "Optimize business processes and enhance productivity with AI.",
  },
];

const visionPoints = [
  {
    title: "Redefining the Future of Automation",
    text: "To become the leading platform for AI-driven business automation, helping individuals and teams unlock new revenue streams.",
  },
  {
    title: "A Global Platform for AI Innovation",
    text: "Empower businesses to grow with intelligent solutions.",
  },
  {
    title: "Simplifying AI for Everyone",
    text: "Make AI simple and accessible for all businesses.",
  },
];

const MissionVisionSection = () => {
  return (
    <section className="mission-vision-section">
      <div className="background-layer" />

      <div className="section-content">
        <SectionIntro
          heading="Our Mission"
          paragraph="Democratizing AI by enabling businesses to build, deploy, and scale intelligent automation agents with ease, without the need for technical expertise."
          size="medium"
        />

        <div className="cards-grid">
          {missionPoints.map((item, i) => (
            <div className="card mission-card" key={i}>
              <div className="icon-text">
                <Check className="check-icon" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-content">
        <SectionIntro
          heading="Our Vision"
          paragraph="To become the leading platform for AI-driven business automation, helping individuals and organizations unlock new revenue streams."
          size="medium"
        />

        <div className="cards-grid vision-layout">
          {visionPoints.map((item, i) => (
            <div
              className={`card vision-card ${i === 2 ? "centered" : ""}`}
              key={i}
            >
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default MissionVisionSection;
