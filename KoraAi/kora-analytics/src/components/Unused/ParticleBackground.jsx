// src/components/ParticleBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#0a0a0a", // Keep your dark background
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        // We can keep onHover, but it might feel a bit odd with falling characters.
        // You can remove it (set enable: false) if you want pure falling.
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Characters will be white
      },
      links: {
        enable: false, // Disable lines between particles for a cleaner data effect
      },
      collisions: {
        enable: false, // Usually not needed for falling data
      },
      move: {
        direction: "bottom", // Particles move downwards
        enable: true,
        outModes: {
          default: "out", // Disappear when they go off screen
          bottom: "out", // Specifically for bottom, they just go away
        },
        random: true, // Randomize initial direction slightly
        speed: 2, // Adjust speed (higher means faster fall)
        straight: false, // Allow curved paths
        // Add gravity for a more natural falling effect
        gravity: {
          enable: true,
          acceleration: 5, // Adjust this value for faster/slower fall
          inverse: false,
          maxSpeed: 50,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 120, // Increase particle count for more visible "rain"
      },
      opacity: {
        value: 0.8, // Make them more visible
        random: true, // Randomize opacity slightly for a dynamic look
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "character", // THIS IS THE KEY CHANGE!
        character: {
          value: [
            "0",
            "1",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "#",
            "$",
            "%",
            "&",
            "!",
            "?",
          ], // Your "data" characters
          font: "monospace", // Use a monospace font for a "code" feel
          style: "",
          weight: "400",
        },
      },
      size: {
        value: { min: 8, max: 20 }, // Larger size for readability
        random: true, // Randomize size
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Keep it in the background
      }}
    />
  );
};

export default ParticleBackground;
