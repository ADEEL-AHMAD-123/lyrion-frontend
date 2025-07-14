// CardsGrid.jsx
import React from 'react';
import './CardsGrid.scss';

const CardsGrid = ({
  heading,
  cards = [],
  className = '',
  gridClass = '',
  headingTag: HeadingTag = 'h2',
}) => {
  return (
    <div className={`cards-grid-section ${className}`}>
      {heading && <HeadingTag className="section-heading">{heading}</HeadingTag>}

      <div className={`cards-grid ${gridClass}`}>
        {cards.map((card, index) => (
          <div className="card-item" key={index}>
            {card.icon && <div className="icon">{card.icon}</div>}
            <div className="text-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
