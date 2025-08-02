// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
//import Skills from "./components/Skills";
//import Projects from "./components/Projects";
import Footer from "./components/Footer";
//import ParticleBackground from "./components/ParticleBackground";

// Import CSS for components
import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/About.css";
//import "./components/Skills.css";
// import "./components/Projects.css";
import "./components/Footer.css";

function App() {
  return (
    <div className="App">
      {/*  <ParticleBackground /> */}
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
