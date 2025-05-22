"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

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
  {name: "TypeScript", rating: 4 },
  {name: "golang", rating: 3 },
  {name:"postgreSQL", rating: 3 },
];

const getStarIcons = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return stars;
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-slate-800 p-6 rounded-2xl shadow-xl w-64 text-center transition-all transform hover:scale-105 hover:ring-4 hover:ring-yellow-400"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-yellow-300 mb-3">{skill.name}</h3>
        <div className="text-yellow-400 text-2xl flex justify-center gap-1">
          {getStarIcons(skill.rating).map((star, idx) => (
            <span
              key={idx}
              className="group-hover:animate-pulse transition duration-300"
            >
              {star}
            </span>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-600 rounded-full mt-4">
          <div
            className="h-full bg-yellow-400 rounded-full transition-all duration-500"
            style={{ width: `${(skill.rating / 5) * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillShowcase: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex items-center gap-3 mb-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 transition duration-300">
            My Skills
          </h1>
          {hovered && (
            <FaStar className="text-yellow-400 animate-bounce transition duration-300" />
          )}
        </div>

        <p className="text-slate-300 mb-12 max-w-xl leading-relaxed">
          I build fast, responsive, and user-friendly web interfaces using React, Next.js,
          and Tailwind CSS. I’m continuously improving and adapting to new technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillShowcase;
