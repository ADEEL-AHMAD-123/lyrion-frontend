import React, { useState } from "react";
import "./TestimonialsSection.scss";
import { ArrowRight } from "lucide-react";
import avatar1 from "../../../assets/images/client.webp";
import avatar2 from "../../../assets/images/client2.webp";
import SectionIntro from "../../common/SectionIntro/SectionIntro";

const testimonials = [
  {
    text: "Lyrion AI has completely transformed the way we handle automation. The platform is incredibly easy to use, and we were able to set up our first AI bot in no time. The seamless integrations with our CRM and email tools have saved us hours of manual work every week!",
    author: "Handan Majid",
    role: "Founder",
    avatar: avatar1,
  },
  {
    text: "Using these templates allowed us to scale our marketing and customer support faster than ever. Clean UI, effective agents, and excellent support! The seamless integrations with our CRM saved us hours of manual work every week!",
    author: "James Holden",
    role: "Marketing Director",
    avatar: avatar2,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="testimonials-section">
      <div className="background-layer" />

      <div className="content">
      <SectionIntro
  heading="Hear from our Satisfied Customers"
  paragraph="Explore real experiences from our valued customers and discover how Lyrión AI has helped them transform their workflows and achieve success."
  size="medium"
/>
<div className="testimonial-wrapper">
  {/* Desktop Arrows (left & right beside the card) */}
  <button
    className={`arrow-btn left desktop-only ${currentIndex === 0 ? "disabled" : ""}`}
    onClick={handlePrev}
    disabled={currentIndex === 0}
  >
    <ArrowRight size={26} />
  </button>

  <div className="testimonial-slider">
    <div
      className="testimonial-track"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {testimonials.map((t, index) => (
        <div className="testimonial-card" key={index}>
          <p className="review-text">"{t.text}"</p>
          <div className="author-info">
            <img src={t.avatar} alt="author" />
            <div className="author-details">
              <h5>{t.author}</h5>
              <span>{t.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <button
    className={`arrow-btn right desktop-only ${currentIndex === testimonials.length - 1 ? "disabled" : ""}`}
    onClick={handleNext}
    disabled={currentIndex === testimonials.length - 1}
  >
    <ArrowRight size={26} />
  </button>

  {/* Mobile Arrows (both below the card) */}
  <div className="mobile-arrows">
    <button
      className={`arrow-btn left ${currentIndex === 0 ? "disabled" : ""}`}
      onClick={handlePrev}
      disabled={currentIndex === 0}
    >
      <ArrowRight size={26} />
    </button>

    <button
      className={`arrow-btn right ${currentIndex === testimonials.length - 1 ? "disabled" : ""}`}
      onClick={handleNext}
      disabled={currentIndex === testimonials.length - 1}
    >
      <ArrowRight size={26} />
    </button>
  </div>
</div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
