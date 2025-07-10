// EmpowerSection.jsx
import React from 'react';
import './_empower-section.scss';
import { Code2, SlidersHorizontal, BarChart3 } from 'lucide-react';
import pattern from '../../assets/images/pattern.png';

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
      <img src={pattern} alt="Pattern" className="empower-pattern" />
      <div className="container">
        <h2>Empower Your Business with Custom AI Agents Tailored to Your Needs</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <div className="text-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
