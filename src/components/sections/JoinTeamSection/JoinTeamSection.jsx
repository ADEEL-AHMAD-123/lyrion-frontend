import React, { useState } from "react";
import "./JoinTeamSection.scss";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import PrimaryButton from "../../common/primary button/PrimaryButton";

const tabs = ["Engineering", "Management", "Human Resources", "Lead Generation"];

const jobsData = {
  "Engineering": [
    {
      type: "Full-time",
      title: "AI Engineer",
      salary: "$61–$75/hr",
      description: "Help us develop the next generation of intelligent bots. Expertise in machine learning and NLP required.",
    },
    {
      type: "Full-time",
      title: "Product Manager",
      salary: "$55–$65/hr",
      description: "Drive the development of new features and products, working closely with engineering and design teams.",
    },
  ],
  "Management": [
    {
      type: "Full-time",
      title: "Product Designer",
      salary: "$45–$60/hr",
      description: "Craft intuitive UX flows and work closely with engineering.",
    },
    {
      type: "Freelance",
      title: "Visual Brand Designer",
      salary: "$40–$55/hr",
      description: "Refine our visual identity and create stunning graphics.",
    },
  ],
  "Human Resources": [
    {
      type: "Part-time",
      title: "Content Strategist",
      salary: "$30–$45/hr",
      description: "Plan and manage engaging content for all channels.",
    },
    {
      type: "Remote",
      title: "SEO Analyst",
      salary: "$35–$50/hr",
      description: "Drive organic growth through technical and on-page SEO.",
    },
  ],
  "Lead Generation": [
    {
      type: "Full-time",
      title: "HR & Talent Lead",
      salary: "$40–$55/hr",
      description: "Manage hiring pipelines and ensure team happiness.",
    },
    {
      type: "Internship",
      title: "Administrative Assistant",
      salary: "$15–$20/hr",
      description: "Support team scheduling, documents, and day-to-day tasks.",
    },
  ],
};

const JoinTeamSection = () => {
  const [activeTab, setActiveTab] = useState("Engineering");

  return (
    <section className="join-team-section">
      <div className="background-layer" />

      <div className="container">
        <SectionIntro
          heading="Join Our Growing Team"
          paragraph="We’re looking for passionate, creative individuals who are eager to shape the future of AI-powered business automation."
          size="medium"
        />

        <div className="tabs">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`tab-btn ${tab === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="jobs-grid">
          {jobsData[activeTab].map((job, i) => (
            <div className="job-card" key={i}>
              <div className="top-row">
                <span className="job-type">{job.type}</span>
              </div>

              <div className="title-row">
                <h4 className="job-title">{job.title}</h4>
                <span className="salary">{job.salary}</span>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="card-buttons">
                <PrimaryButton text={"Apply now"} className="apply-btn" />
                <button className="details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <PrimaryButton text="See Our Open Roles" className="cta-button" />
      </div>
    </section>
  );
};

export default JoinTeamSection;
