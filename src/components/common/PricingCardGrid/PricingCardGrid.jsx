// src/components/common/PricingCardGrid/PricingCardGrid.jsx
import React from "react";
import "./PricingCardGrid.scss";
import { Check } from "lucide-react";
import clsx from "clsx";

const PricingCardGrid = ({ cards = [], className = "" }) => {
  return (
    <div className={clsx("pricing-grid", className)}>
      {cards.map((card, index) => (
        <div className="pricing-card" key={index}>
          <h4 className="plan-name">{card.plan}</h4>
          <div className="price">
            <span className="amount">{card.price}</span>
            <span className="duration">/mo</span>
          </div>
          <p className="desc">{card.description}</p>

          <div className="divider" />

          <div className="features">
            {card.features.map((feature, i) => (
              <div className="feature-line" key={i}>
                <Check className="tick" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="cta-btn">Get Started</button>
        </div>
      ))}
    </div>
  );
};

export default PricingCardGrid;
