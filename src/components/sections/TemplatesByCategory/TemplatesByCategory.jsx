// TemplatesByCategory.jsx
import React from "react";
import "./TemplatesByCategory.scss";
import agent1 from "../../../assets/images/assistant_agent.png";
import agent2 from "../../../assets/images/calling_agent.png";
import agent3 from "../../../assets/images/chatbot_agent.png";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import { ChevronDown } from "lucide-react";
import TemplateCardGrid from "../../common/TemplateCardGrid/TemplateCardGrid";

const categoryData = [
  {
    name: "E-commerce Bots",
    heading: "Online Store Automation",
    description: "Automate your e-commerce store with AI-powered agents that manage orders, chat, support, and more.",
    cards: [agent1, agent2, agent3],
  },
  {
    name: "Digital Marketing Bots",
    heading: "Marketing & Leads Generation",
    description: "Boost your marketing reach and collect qualified leads using intelligent automation strategies.",
    cards: [agent2, agent3, agent1],
  },
  {
    name: "Client Service Bots",
    heading: "Customer Support Assistants",
    description: "Deploy smart agents to handle FAQs, complaints, and customer inquiries round-the-clock.",
    cards: [agent3, agent1, agent2],
  },
];

const TemplatesByCategory = () => {
  return (
    <section className="template-categories">
      <SectionIntro
        heading="Explore Templates by Category"
        paragraph="Choose from a variety of pre-built templates designed for different business needs. Customize them to your heart's content."
        size="medium"
      />

      <div className="categories-wrapper">
        {categoryData.map((cat, index) => (
          <div className="category-block" key={index}>
            <div className="background-layer" />
            <div className="content-wrapper">
              <div className="category-header">
                <span className="category-name">{cat.name}</span>
                <h3>{cat.heading}</h3>
                <div className="category-desc">
                  <p>{cat.description}</p>
                  <button className="more-btn">More</button>
                </div>
              </div>

              <TemplateCardGrid cards={cat.cards} titles={["Agent 1", "Agent 2", "Agent 3"]} />
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-wrapper">
        <button className="view-more-btn">
          Explore More
          <ChevronDown className="arrow-icon" size={16} strokeWidth={1.5} stroke="currentColor" />
        </button>
      </div>
    </section>
  );
};

export default TemplatesByCategory;
