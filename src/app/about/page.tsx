"use client";

import React, { useState } from "react";
import { useScrollFadeIn } from "@/Hooks/useScrollFadeIn";
import SolarSystem from "@/Compoents/universe/universe";



const AboutMe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fadeInText = useScrollFadeIn("up", 0.7, 0);
  const cosmicAnim = useScrollFadeIn("up", 0.7, 0.3);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) * 0.02,
      y: (e.clientY - window.innerHeight / 2) * 0.02
    });
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      
      <div className="absolute inset-0 z-0">
        <SolarSystem mousePosition={mousePosition} />
      </div>

  
      <div className="relative z-10 h-full flex items-center justify-center">
        <div
          className="max-w-4xl mx-auto text-center p-6   rounded-xl"
          ref={fadeInText.ref}
          style={fadeInText.style}
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I&apos;m{" "}
            <span className="text-yellow-300 font-semibold">Samrat Pandey</span>, 
            a passionate and self-motivated Front-End Developer...
          </p>

          <div
            ref={cosmicAnim.ref}
            style={cosmicAnim.style}
            className="mt-10 p-6 rounded-xl border border-yellow-500/50 shadow-md text-slate-300 text-lg"
          >
            <p>
              <span className="text-yellow-300 font-semibold">🌌 When I’m not coding</span>, 
              I’m often lost in the vast mysteries of the universe...
            </p>
          </div>

          <p className="mt-10 text-yellow-400 font-semibold text-lg">
            Let’s create, learn, and explore — both the code and the cosmos 🚀.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;