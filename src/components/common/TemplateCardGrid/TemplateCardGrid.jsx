import React from "react";
import "./TemplateCardGrid.scss";
import clsx from "clsx"; // helps merge class names

const TemplateCardGrid = ({ cards = [], titles = [], startIndex = 0, className = "" }) => {
  return (
    <div className={clsx("cards-grid", className)}>
      {cards.map((card, index) => {
        const isActive = index % 2 === 0;
        const title = titles[startIndex + index] || `Agent ${index + 1}`;

        return (
          <div className="template-card" key={index}>
            <img src={card} alt={title} />
            <h4 className="agent-title">{title}</h4>
            <div className="status-line">
              <span className={`dot ${isActive ? "active" : "inactive"}`} />
              <span className="status">{isActive ? "Active" : "Not Active"}</span>
            </div>
            <div className="card-buttons">
              <button className="preview-btn">Preview</button>
              <button className="use-btn">Use Template</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateCardGrid;
