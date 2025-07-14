import React from "react";
import "./HomePricingSection.scss";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import PricingCardGrid from "../../common/PricingCardGrid/PricingCardGrid";

const pricingPlans = [
    {
      plan: "Starter",
      price: "$23/mo",
      description: "For first-time builders ready to launch and sell their first AI bots.",
      features: [
        "Up to 5 Bots",
        "Host on our subdomain",
        "Email Support",
      ],
    },
    {
      plan: "Creator",
      price: "$74/mo",
      description: "Best for creators ready to scale, monetize, and build their brand.",
      features: [
        "20 Bots + Templates",
        "Branding + own domain",
        "API access + CRM",
      ],
    },
    {
      plan: "Scale",
      price: "$187/mo",
      description: "For agencies and SaaS teams needing automation at scale.",
      features: [
        "50 Bots + Full white label",
        "Custom domain hosting",
        "5 Team members",
      ],
    },
    {
      plan: "Enterprise",
      price: "$3.2k/mo",
      description: "For large-scale platforms needing power, flexibility, and control.",
      features: [
        "Unlimited Bots",
        "Private Server & API keys",
        "25 Admin seats + SLA",
      ],
    },
  ];
  

const HomePricingSection = () => {
  return (
    <section className="home-pricing-plans-section">
      <div className="background-layer" />
      <div className="container">
        <SectionIntro
          heading="Choose Your Plan"
          paragraph="Flexible pricing for every stage of your growth journey."
          size="medium"
        />
        <PricingCardGrid cards={pricingPlans} />
      </div>
    </section>
  );
};

export default HomePricingSection;
