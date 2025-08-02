// src/components/Hero.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Hello, We are <span className="highlight">Kora Analytics</span>
        </h1>
        <div className="hero-typewriter">
          <Typewriter
            options={{
              strings: [
                "Following the Stock's",
                "Understanding the Market's",
                "Following the Analyst's",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
        <p className="hero-description">
          Supercharge your investment decision's with Kora Analytics.
        </p>
        <div className="hero-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
