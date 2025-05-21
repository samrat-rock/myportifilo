"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


interface Skill {
  name: string;
  rating: number;
}

const skills: Skill[] = [
  { name: "HTML", rating: 5 },
  { name: "CSS", rating: 4 },
  { name: "JavaScript", rating: 4.5 },
  { name: "Tailwind CSS", rating: 4 },
  { name: "React", rating: 4 },
  { name: "Next.js", rating: 4.5 },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const ratingStars = [...Array(5)].map((_, index) =>
    index < Math.floor(skill.rating) ? "★" : "☆"
  );

  return (
    <div className="relative group overflow-hidden bg-slate-700 p-6 rounded-lg shadow-lg w-64 text-center transition-all transform hover:shadow-xl hover:shadow-white hover:-translate-y-2 hover:scale-105">
      
      {/* Expanding White Patch in Top-Left */}
      <div className="absolute top-0 left-0 w-10 h-10 bg-white rounded-br-lg rounded-tl-lg transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-lg z-0" />

      {/* Content Layer */}
      <div className="relative z-10 transition-colors duration-300 group-hover:text-slate-700 text-white">
        <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
        <div className="text-yellow-400 text-2xl flex justify-center gap-1">
          {ratingStars.map((star, index) => (
            <span
              key={index}
              className="group-hover:animate-pulse group-hover:brightness-125 transition duration-300"
            >
              {star}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const SkillShowcase: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        
        <div
          className="flex items-center gap-2 mb-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400">My Skills</h1>
          {hovered && (
            <FaStar className="text-yellow-400 animate-bounce transition duration-300" />
          )}
        </div>
        <p className="text-slate-300 mb-12 max-w-lg">
          I build fast, responsive, and user-friendly web interfaces using React, Next.js,
          and Tailwind CSS.
        </p>

        
        <div className="flex flex-wrap justify-center gap-8 text-slate-600">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillShowcase;
