import React, { useState } from "react";
import "./StartTemplatesSection.scss";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import calling_agent from "../../../assets/images/calling_agent.png"; 
import assistant_agent from "../../../assets/images/assistant_agent.png"; 
import chatbot_agent from "../../../assets/images/chatbot_agent.png"; 
import TemplateCardGrid from "../../common/TemplateCardGrid/TemplateCardGrid";

const tabs = ["Sales", "Support", "Marketing", "HR", "More"];
const cardImages = [calling_agent, assistant_agent, chatbot_agent];

const StartTemplatesSection = () => {
  const [activeTab, setActiveTab] = useState("Sales");

  const getCards = () => {
    const cardsOrder = {
      Sales: [0, 1, 2],
      Support: [1, 2, 0],
      Marketing: [2, 0, 1],
      HR: [0, 2, 1],
      More: [1, 0, 2],
    };
    return cardsOrder[activeTab].map((i) => cardImages[i]);
  };

  return (
    <section className="start-templates-section">
      <div className="background-layer" />

      <div className="content-wrapper">
        <SectionIntro
          heading="Start Fast with Powerful Templates"
          paragraph="Browse ready-to-deploy bots categorized by industry and goal."
          size="medium"
        />

        <div className="tabs">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`tab-btn ${tab === activeTab ? "active" : ""} ${tab === "More" ? "more-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <TemplateCardGrid cards={getCards()} titles={tabs} className="narrow-width" />
      </div>
    </section>
  );
};

export default StartTemplatesSection;
