import React from 'react';
import './WhatDrivesUsSection.scss';
import { Sparkles, Users, ShieldCheck } from 'lucide-react';
import SectionIntro from '../../common/SectionIntro/SectionIntro';
import CardsGrid from '../../common/CardsGrid/CardsGrid';

const values = [
  {
    icon: <Sparkles size={32} />,
    title: 'Innovation',
    description:
      'We push the boundaries of AI technology, constantly evolving our platform to provide businesses with advanced automation tools.',
  },
  {
    icon: <Users size={32} />,
    title: 'Customer-Centricity',
    description:
      'We are committed to delivering the highest value to our customers by offering tailored, flexible solutions that adapt to their unique needs and goals.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Integrity',
    description:
      'We hold ourselves to the highest standards of transparency, reliability, and honesty, ensuring our customers trust our platform every step of the way.',
  },
];

const WhatDrivesUsSection = () => {
  return (
    <section className="what-drives-us-section">
      <div className="background-layer" />

      <div className="container">
        <SectionIntro
          heading="What Drives Us"
          size="medium"
        />

        <CardsGrid cards={values} className="drive-cards" />
      </div>
    </section>
  );
};

export default WhatDrivesUsSection;
