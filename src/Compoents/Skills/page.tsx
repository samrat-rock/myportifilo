"use client";

import React, { useRef, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import htmlanimation from "@/Compoents/gifComponets/htmlGif/animations/4e8ab9b5-334a-4a3c-bf92-1a84c70b6549.json";

  interface Skill {
    name: string;
    rating: number;
    animation?: any;
  }

  const skills: Skill[] = [
    { name: "HTML", rating: 5, animation: htmlanimation },
    {name:"CSS", rating:5, animation:}
    

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

 

const Skill: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = useRef(null);
  const lottieRef = useRef<any>(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.1 }}
      className="group relative p-6 w-72 text-center rounded-2xl shadow-lg bg-slate-400 hover:bg-slate-500 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => {
        setIsHovered(true);
        if (lottieRef.current) {
          lottieRef.current.play();
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (lottieRef.current) {
          lottieRef.current.stop();
          lottieRef.current.goToAndStop(0, true);
        }
      }}
    >
      {skill.animation && (
        <div className="mb-4 h-32 flex items-center justify-center">
          <div className={`rounded-full overflow-hidden p-2 bg-gradient-to-br from-amber-200 to-amber-500 shadow-lg transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Lottie
              lottieRef={lottieRef}
              animationData={skill.animation}
              loop={false}
              autoplay={false}
              className="w-20 h-20"
            />
          </div>
        </div>
      )}

      {/* Rest of your component remains the same */}
      <div className="relative z-10">
        <h3
          className="text-xl font-semibold mb-3"
          style={{
            background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientFlow 3s linear infinite",
          }}
        >
          {skill.name}
        </h3>
        <div className="flex justify-center items-center gap-2 text-2xl mb-2">
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
                animation: "gradientFlow 3s linear infinite",
              }}
            >
              {star}
            </span>
          ))}
          <span className="text-base font-semibold text-slate-800 ml-2">
            {skill.rating.toFixed(1)} / 5
          </span>
        </div>

        <div className="w-full h-2 bg-slate-600 rounded-full mt-4 overflow-hidden relative">
          <motion.div
            className="h-full rounded-full absolute top-0 left-0"
            style={{
              width: `${(skill.rating / 5) * 100}%`,
              background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPositionX: ["0%", "200%"]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "linear",
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
      <section className="px-6 py-20 bg-[#a4b7d86e] text-white">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center gap-3 mb-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-700">
              My Skills
            </h1>
            {hovered && (
              <div style={{ animation: "gradientFlow 3s linear infinite" }}>
                <FaStar className="animate-bounce" />
              </div>
            )}
          </div>

          <p className="mb-12 max-w-xl leading-relaxed text-slate-500">
            I build fast, responsive, and user-friendly web interfaces using
            React, Next.js, and Tailwind CSS. I’m continuously improving and
            adapting to new technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default SkillShowcase;
