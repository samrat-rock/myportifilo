"use client";

import React from "react";
import Link from "next/link";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiGoland } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">

    
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-400">Samrat Pandey</h2>
          <p className="text-sm text-slate-400">
            Front-End Developer focused on building performant and visually engaging user interfaces using React, Next.js, Tailwind CSS, and GoLang on the backend.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl text-slate-400">
            <a href="https://github.com/samrat-rock" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-yellow-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/samrat-pandey-464368236/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-yellow-400 transition" />
            </a>
            <a href="https://myportifilo.vercel.app" target="_blank" rel="noopener noreferrer">
              🌐
            </a>
          </div>
        </div>

        
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-yellow-400">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 text-2xl text-slate-400">
            <FaReact title="React" />
            <SiNextdotjs title="Next.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <FaNodeJs title="Node.js" />
            <SiGoland title="Golang" />
            <FaGithub title="GitHub" />
          </div>
        </div>

      
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            <li className="hover:text-yellow-400 transition">
              <Link href="#hero">Home</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <a href="/resume.pdf" target="_blank">Resume</a>
            </li>
          </ul>
        </div>

      </div>

      
      <div className="mt-10 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Samrat Pandey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
