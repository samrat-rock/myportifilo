"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Skill {
  name: string;
  rating: number;
}

const getStarIcons = (rating: number, isHovered: boolean) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const delay = `${i * 100}ms`;
    const starStyle = isHovered
      ? `text-amber-400 opacity-0 animate-fade-in`
      : `text-slate-700`;
    const animationStyle = isHovered
      ? { animationDelay: delay }
      : {};
    if (rating >= i)
      stars.push(
        <FaStar
          key={i}
          className={starStyle}
          style={animationStyle}
        />
      );
    else if (rating >= i - 0.5)
      stars.push(
        <FaStarHalfAlt
          key={i}
          className={starStyle}
          style={animationStyle}
        />
      );
    else
      stars.push(
        <FaRegStar
          key={i}
          className={starStyle}
          style={animationStyle}
        />
      );
  }
  return stars;
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`w-72 h-32 text-center rounded-xl shadow-md flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 
        bg-slate-300 hover:bg-gradient-to-br hover:from-slate-500`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     <h3
  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
    hovered ? "text-slate-600" : "text-slate-800"
  }`}
>
  {skill.name}
</h3>
      <div className="flex gap-1 text-2xl">
        {getStarIcons(skill.rating, hovered)}
      </div>
    </div>
  );
};


const SkillShowcase: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", rating: 4.8 },
    { name: "CSS", rating: 4.5 },
    { name: "JavaScript", rating: 4.6 },
    { name: "Tailwind CSS", rating: 4.7 },
    { name: "Bootstrap", rating: 4.3 },
    { name: "Ant Design", rating: 4.2 },
    { name: "Material UI", rating: 4.4 },
    { name: "Golang", rating: 3.5 },
    { name: "Node.js", rating: 4.6 },
    { name: "Docker", rating: 3.0},
    { name: "CI/CD Pipelines", rating: 2.5 },
  ];

  return (
    <section className="px-6 py-20 bg-slate-100 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 ">My Skills</h1>
          <p className="max-w-2xl text-slate-600 text-justify md:text-left px-5 md:px-0">
            I specialize in building interactive and scalable web applications using modern
            front-end technologies like React, Next.js, Tailwind CSS, and backend with Node.js and Golang.
            My skills span both design systems and development best practices including CI/CD and containerization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default SkillShowcase;
