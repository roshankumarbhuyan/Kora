// src/components/About.jsx
import React from "react";
import "./About.css";
import { FaDatabase } from "react-icons/fa6";
import { MdSentimentNeutral } from "react-icons/md";
import { Gi3dGlasses } from "react-icons/gi";

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <div className="about-content">
        We are a data analytics company dedicated to helping you discover
        investable stocks in the stock markets. Our platform aggregates expert
        opinions from various analysts, allowing you to follow what the
        professionals have to say about your chosen stocks.
        <p>
          Leveraging advanced data pipelines and AI, we create tailored insights
          to visualize your investment journey. With our tools, you can make
          informed decisions and confidently navigate the dynamic world of stock
          investing.
        </p>
        <ul className="about-interests">
          <li>
            <FaDatabase /> Data-Driven Stock Discovery
          </li>
          <MdSentimentNeutral /> Analyst Sentiment Tracking
          <li>
            <Gi3dGlasses /> Personalized Investment Insights
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
