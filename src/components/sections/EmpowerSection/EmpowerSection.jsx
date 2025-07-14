// EmpowerSection.jsx
import React from 'react';
import './_empower-section.scss';
import { Code2, SlidersHorizontal, BarChart3 } from 'lucide-react';
import CardsGrid from '../../common/CardsGrid/CardsGrid';

const features = [
  {
    icon: <Code2 size={32} />,
    title: 'No Coding Required',
    description:
      'Design, deploy, and manage powerful AI agents with a simple drag-and-drop interface. Build bots effortlessly without any technical skills.',
  },
  {
    icon: <SlidersHorizontal size={32} />,
    title: 'Fully Customizable',
    description:
      'Create AI bots that fit your business perfectly. Customize workflows, branding, and integrations to suit your unique needs.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Scalable',
    description:
      'Automate tasks, engage customers, and scale your operations. Whether you’re a startup or enterprise, Lyrion AI grows with you.',
  },
];

const EmpowerSection = () => {
  return (
    <section className="empower-section">
      <div className="background-layer" />
      <div className="container">
        <CardsGrid
          heading="Empower Your Business with Custom AI Agents Tailored to Your Needs"
          cards={features}
          className="empower-cards"
        />
      </div>
    </section>
  );
};


export default EmpowerSection;
