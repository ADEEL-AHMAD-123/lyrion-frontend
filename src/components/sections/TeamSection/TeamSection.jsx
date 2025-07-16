import React from "react";
import "./TeamSection.scss";
import SectionIntro from "../../common/SectionIntro/SectionIntro";
import { Twitter } from "lucide-react";

import team1 from "../../../assets/images/team1.jpeg";
import team2 from "../../../assets/images/team2.jpeg";
import team3 from "../../../assets/images/team3.png";

const teamMembers = [
    {
      name: "Aman Thand",
      role: "Founder & CEO",
      image: team1,
    },
    {
      name: "Sami Ullah",
      role: "Product Developer & CTO",
      image: team2,
    },
    {
      name: "Jenny Wilson",
      role: "Founder & CEO",
      image: team3,
    },
  ];
  
  const TeamSection = () => {
    return (
      <section className="team-section">
        <div className="background-layer" />
        <div className="container">
          <SectionIntro
            heading="Meet the Team Behind Lyrion AI"
            paragraph="Our talented team of AI experts, developers, and innovators is dedicated to revolutionizing business automation and driving AI advancements."
            size="medium"
          />
  
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.image} alt={member.name} className="team-img" />
                <div className="overlay-content">
                  <div className="left">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                  <div className="right">
                    <div className="twitter-icon">
                      <Twitter size={16}  />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;
