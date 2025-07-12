import React, { useState } from "react";
import "./TestimonialsSection.scss";
import { ArrowRight } from "lucide-react";
import avatar1 from "../../../assets/images/client.webp";
import avatar2 from "../../../assets/images/client2.webp";

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
        <div className="section-header">
          <h2>Hear from our Satisfied Customers</h2>
          <p>
            Explore real experiences from our valued customers and discover how Lyrión AI
            has helped them transform their workflows and achieve success.
          </p>
        </div>

        <div className="testimonial-wrapper">
          <button
            className={`arrow-btn left ${currentIndex === 0 ? "disabled" : ""}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <span>
              <ArrowRight size={26} />
            </span>
          </button>

          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
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
            className={`arrow-btn right ${
              currentIndex === testimonials.length - 1 ? "disabled" : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
          >
            <span>
              <ArrowRight size={26} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
