// TemplatesPage.jsx
import React, { useState } from "react";
import "./TemplatesPage.scss";
import { Search, SlidersHorizontal } from "lucide-react";
import agent1 from "../../assets/images/assistant_agent.png";
import agent2 from "../../assets/images/calling_agent.png";
import agent3 from "../../assets/images/chatbot_agent.png";
import TemplatesByCategory from "../../components/sections/TemplatesByCategory/TemplatesByCategory";
import TestimonialsSection from "../../components/sections/TestimonialsSection/TestimonialsSection";
import CTA from "../../components/sections/CTA/CTA";
import SectionIntro from "../../components/common/SectionIntro/SectionIntro";
import TemplateCardGrid from "../../components/common/TemplateCardGrid/TemplateCardGrid";

const tabs = ["Calling Agent", "Assistant Agent", "Chatbot Agent", "AI Worker", "More"];
const cardImages = [agent1, agent2, agent3];

const TemplatesPage = () => {
  const [activeTab, setActiveTab] = useState("Calling Agent");

  const getCards = () => {
    const cardsOrder = {
      "Calling Agent": [0, 1, 2],
      "Assistant Agent": [1, 2, 0],
      "Chatbot Agent": [2, 0, 1],
      "AI Worker": [0, 2, 1],
      "More": [1, 0, 2],
    };
    return cardsOrder[activeTab].map(i => cardImages[i]);
  };

  return (
    <>
      <section className="template-page">
        <div className="background-layer" />
        <div className="content-wrapper">
          <SectionIntro
            heading="AI Agent Templates"
            paragraph="Create powerful, intelligent bots to automate tasks, boost productivity, and grow your business—no coding required."
          />

          <div className="content-section">
            <div className="search-area">
              <div className="search-input">
                <Search size={16} />
                <input type="text" placeholder="Search templates..." />
              </div>
              <div className="filter-icon">
                <SlidersHorizontal size={16} />
              </div>
            </div>

            <div className="tabs">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  className={`tab-btn ${tab === activeTab ? "active" : ""} ${
                    tab === "More" ? "more-tab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <TemplateCardGrid cards={getCards()} titles={tabs} />
          </div>
        </div>
      </section>

      <TemplatesByCategory />
      <TestimonialsSection />
      {/* <CTA /> */}
    </>
  );
};

export default TemplatesPage;