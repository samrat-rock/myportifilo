"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import { useScrollFadeIn } from "@/Hooks/useScrollFadeIn"; 

const Hero = () => {
  const textAnimation = useScrollFadeIn("up", 0.7, 0);
  const imageAnimation = useScrollFadeIn("up", 0.7, 0.2);

  return (
    <section className="px-6 py-10 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        <div
          className="text-center md:text-left"
          ref={textAnimation.ref}
          style={textAnimation.style}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi&apos; I&apos;m Samrat Pandey
          </h1>
          <h2 className="text-2xl text-yellow-400 mb-4">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Specialist",
                "UI/UX Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-slate-300 mb-6 max-w-md">
            I build fast, responsive, and user-friendly web interfaces using
            React, Next.js, and Tailwind CSS. I love crafting delightful user
            experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/resume.pdf"
              className="bg-yellow-400 text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/samrat-rock"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-400 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg"
          ref={imageAnimation.ref}
          style={imageAnimation.style}
        >
          <Image
            src="/profile.jpg"
            alt="Samrat Pandey"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
