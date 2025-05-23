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
import Lottie from "lottie-react";
import codingAnimation from "@/Compoents/animations/1fbcc26e-fabd-4fcc-a100-df0431f89f86.json";


const Hero = () => {
  const textAnimation = useScrollFadeIn("up", 0.7, 0);
  const imageAnimation = useScrollFadeIn("up", 0.7, 0.2);

  return (
    <section className="px-6 py-10 bg-[#f4f8ff] ">
      <div className="max-w-7xl mx-auto">
        
        


      <div className="md:flex justify-between ">
      <div
          className="text-center md:text-left "
          ref={textAnimation.ref}
          style={textAnimation.style}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-700">
            Hi&apos; I&apos;m Samrat Pandey
          </h1>
          <h2 className="text-2xl text-[#8b7cfa] mb-4">
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
          <p className="text-slate-700 font-bold md:text-2xl mb-6 max-w-md">
            I build fast, responsive, and user-friendly web interfaces using
            React, Next.js, and Tailwind CSS. I love crafting delightful user
            experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/resume.pdf"
              className="bg-[#8b7cfa]  font-semibold px-6 py-2 rounded-full hover:bg-[#5f55ac] text-white transition"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="border border-[#8b7cfa] text-[#8b7cfa] hover:bg-[#665cb4] hover:text-white font-bold px-6 py-2 rounded-full  transition"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex gap-10 mt-6 justify-center md:justify-start ">
            <a
              href="https://github.com/samrat-rock"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#aba3e9] transition"
            >
              <FontAwesomeIcon icon={faGithub} className="text-5xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:text-blue-500 text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedin}  className="text-5xl" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:text-blue-400 text-blue-600 transition"
            >
              <FontAwesomeIcon icon={faTwitter}  className="text-5xl" />
            </a>
          </div>
        </div>

      <div
  className="md:w-xl md:h-full  rounded-lg md:pl-40    "
  ref={imageAnimation.ref}
  style={imageAnimation.style}
>
<Lottie
    animationData={codingAnimation}
    loop
    className="object-cover w-full h-full"
  />
</div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
