"use client";

import React, { useState } from "react";
import Particles from "react-tsparticles";
import { particlesInit, particlesOptions } from "@/particlesOptions/page"
import { useScrollFadeIn } from "@/Hooks/useScrollFadeIn";

const AboutMe = () => {
  const fadeInText = useScrollFadeIn("up", 0.7, 0);
  const cosmicAnim = useScrollFadeIn("up", 0.7, 0.3);

  const [showCosmic, setShowCosmic] = useState(false);

  const handleCosmicClick = () => {
    setShowCosmic((prev) => !prev);
  };

  return (
    <section className="relative px-6 py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
      <div className="text-center mb-6">
        <button
          onClick={handleCosmicClick}
          className="px-6 py-3 bg-yellow-400 text-slate-800 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          {showCosmic ? "Hide Cosmic Background" : "Activate Cosmic Background"}
        </button>
      </div>

      {showCosmic && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      )}

      <div
        className="max-w-4xl mx-auto text-center relative z-10"
        ref={fadeInText.ref}
        style={fadeInText.style}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed text-justify">
          I'm{" "}
          <span className="text-yellow-300 font-semibold">Samrat Pandey</span>, a passionate and self-motivated Front-End Developer...
        </p>

        <div
          ref={cosmicAnim.ref}
          style={cosmicAnim.style}
          className="bg-slate-900 bg-opacity-60 mt-10 p-6 rounded-xl border border-yellow-500 shadow-md text-slate-300 text-lg leading-relaxed text-justify"
        >
          <p>
            <span className="text-yellow-300 font-semibold text-lg">🌌 When I’m not coding</span>, I’m often lost in the vast mysteries of the universe...
          </p>
        </div>

        <p className="mt-10 text-yellow-400 font-semibold text-lg">
          Let’s create, learn, and explore — both the code and the cosmos 🚀.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
