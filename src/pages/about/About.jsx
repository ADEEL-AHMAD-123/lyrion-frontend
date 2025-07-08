import React from "react";
import "./About.scss";
import logoSplit from "../../assets/images/logo-cropped.png";
import { MessageSquare, Bot, BarChart3, Globe, ShoppingCart } from "lucide-react";
import Hero from "../../components/sections/Hero/Hero";

const aboutHeroContent = {
  heading: "About Lyrion AI",
  paragraph:
    "This AI Agent Platform empowers individuals, entrepreneurs, and enterprises to design, deploy, and commercialize custom AI bots tailored for any industry. Much like Shopify enables users to create ecommerce stores, this platform allows users to build AI bots — ranging from marketing automation assistants to data analysts — and sell or use them with full ownership, customization, and monetization options.",
  buttonText: "Learn More",
};

const AboutSecondSection = () => {
  return (
    <>
      <Hero
        heading={aboutHeroContent.heading}
        paragraph={aboutHeroContent.paragraph}
        buttonText={aboutHeroContent.buttonText}
      />

      <section className="about-cards-section">
        <div className="about-card-grid">
          {/* Left Card */}
          <div className="left-card card">
            <div className="text-header">
              <h4>Satisfaction Rate</h4>
              <p>From all Bots</p>
            </div>

            <div className="satisfaction-graph">
              <svg viewBox="0 0 200 100" className="arc">
                <path
                  d="M 10 100 A 90 90 0 0 1 190 100"
                  stroke="#8e44ec"
                  strokeWidth="10"
                  fill="none"
                />
             
              </svg>

              <div className="percentage-info">
                <h3>95%</h3>
                <span>Based on performance</span>
              </div>

              <div className="scale">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Center Logo (underlapping) */}
          <div className="logo-center">
            <img src={logoSplit} alt="logo" />
          </div>

          {/* Right Cards */}
          <div className="right-cards">
            <div className="card top-card">
              <div className="card-content">
                <div className="text">
                  <span className="label">Calls Booked</span>
                  <div className="number">
                    120 <span className="growth">+5%</span>
                  </div>
                </div>
                <div className="icon-circle">
                  <Globe size={18} />
                </div>
              </div>
            </div>

            <div className="card bottom-card">
              <div className="card-content">
                <div className="text">
                  <span className="label">Workflows</span>
                  <div className="number">
                    87 <span className="growth">+8%</span>
                  </div>
                </div>
                <div className="icon-circle">
                  <ShoppingCart size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSecondSection;
