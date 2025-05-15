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
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-64 text-center transition-all transform hover:bg-yellow-100 hover:shadow-xl hover:shadow-yellow-500 hover:-translate-y-2 hover:scale-105">
      <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
      <div className="text-yellow-500 text-2xl">
        {ratingStars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    </div>
  );
};

const SkillShowcase: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Text Content */}
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
