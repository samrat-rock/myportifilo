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
  { name: "TypeScript", rating: 4 },
  { name: "golang", rating: 3 },
  { name: "postgreSQL", rating: 3 },
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
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="relative z-10">
        <h3 
          className="text-xl font-semibold mb-3"
          style={{
            background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientMove 3s linear infinite"
          }}
        >
          {skill.name}
        </h3>
        <div className="text-2xl flex justify-center gap-1">
          {getStarIcons(skill.rating).map((star, idx) => (
            <span
              key={idx}
              className="group-hover:animate-pulse transition duration-300"
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradientMove 3s linear infinite"
              }}
            >
              {star}
            </span>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-600 rounded-full mt-4">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(skill.rating / 5) * 100}%`,
              background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
              backgroundSize: "200% auto",
              animation: "gradientMove 3s linear infinite"
            }}
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
          <h1 
            className="text-4xl sm:text-5xl font-extrabold"
            style={{
              background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "gradientMove 3s linear infinite"
            }}
          >
            My Skills
          </h1>
          {hovered && (
            <div
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradientMove 3s linear infinite"
              }}
            >
              <FaStar className="animate-bounce" />
            </div>
          )}
        </div>

        <p 
          className="mb-12 max-w-xl leading-relaxed"
          style={{
            background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientMove 3s linear infinite"
          }}
        >
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