import React, { useState } from "react";
import "./FaqSection.scss";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I create my first AI bot?",
    answer: "Use our no-code visual builder to create bots in minutes. Choose a template and start customizing.",
  },
  {
    question: "Can I use my own branding?",
    answer: "Yes. Our Pro and Business plans allow custom branding including logo, domain, and colors.",
  },
  {
    question: "Do I need coding skills to use Lyrion AI?",
    answer: "No. Our platform is designed for non-technical users to easily launch and manage bots.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, all plans come with a 14-day free trial. Explore all features before committing.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="background-layer" />

      <div className="container">
        <SectionIntro
          heading="Frequently Asked Questions"
          paragraph="Everything you need to know before getting started."
          size="medium"
        />

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                {openIndex === index ? <Minus size={16} className="faq-icon" /> : <Plus size={16} className="faq-icon" />}
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
