"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGoland, SiGitlab } from "react-icons/si";

const techIcons = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiGoland />, label: "GoLang" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <SiGitlab />, label: "CI/CD" },
  { icon: <FaGithub />, label: "GitHub" },
];

const socialLinks = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/samrat-pandey-464368236/" },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/yourusername" },
  { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com/yourhandle" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            About Me
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm a passionate Front-End Developer with a love for clean UI, animation, and performance.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-800 p-6 rounded-2xl shadow-lg space-y-4 text-base leading-relaxed"
        >
          <p>
            Hello! 👋 I'm <span className="font-semibold text-yellow-300">Samrat Pandey</span>, a Front-End Developer skilled in building modern web interfaces with <span className="text-cyan-300">React</span>, <span className="text-purple-300">Next.js</span>, and <span className="text-sky-300">Tailwind CSS</span>. 
          </p>
          <p>
            While my primary focus is on front-end, I also have foundational knowledge of <span className="text-green-300">GoLang</span>, <span className="text-blue-300">Docker</span>, and setting up basic <span className="text-orange-300">CI/CD pipelines</span> using GitLab and GitHub Actions.
          </p>
          <p>
            I am a part-time space explorer and tech enthusiast. 🌌 I'm always curious to gain new tech information and explore the world of quantum computing. ⚛️
          </p>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 text-3xl text-slate-400">
            {techIcons.map(({ icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.2 }}
                className="hover:text-yellow-400 transition duration-300"
                title={label}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-xl font-semibold text-yellow-400">Connect With Me</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Let’s connect and share ideas! I love collaborating on creative web projects, exploring emerging technologies, and talking space & quantum computing.
          </p>
          <div className="flex justify-center gap-6 text-2xl text-slate-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-slate-500 italic pt-10"
        >
          "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
