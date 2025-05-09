"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const Hero = () => {
  const staticPrefix = "I am\u00A0";
  const dynamicParts = ["Samrat Pandey", "Frontend Developer"];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Text animation states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(1);
  const [isVanishing, setIsVanishing] = useState(false);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px 0px 0px"
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Existing text animation logic
  const currentText = dynamicParts[currentIndex];
  const dynamicText = currentText.slice(0, letterIndex);

  useEffect(() => {
    if (!isVanishing && letterIndex > currentText.length) {
      setIsVanishing(true);
      return;
    }

    if (isVanishing && letterIndex === 0) {
      const nextIndex = (currentIndex + 1) % dynamicParts.length;
      setCurrentIndex(nextIndex);
      setIsVanishing(false);
      setLetterIndex(1);
      return;
    }

    const timeout = setTimeout(() => {
      setLetterIndex((prev) => (isVanishing ? prev - 1 : prev + 1));
    }, 120);

    return () => clearTimeout(timeout);
  }, [letterIndex, isVanishing, currentIndex]);

  return (
    <>
    <div ref={sectionRef} className="flex justify-between bg-slate-600 items-center px-10 min-h-screen">
      {/* Left Content */}
      <div className={`flex-1 transition-all duration-500 ease-out ${
        isVisible 
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}>
        <div className="h-[60vh] flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold flex">
            <span className="text-white">{staticPrefix}</span>
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              {dynamicText}
            </span>
          </h1>
        </div>
      </div>

      {/* Right Content */}
      <div className={`flex-1 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20"
      }`}>
        <div className="flex justify-end">
          <Image
            src="/Logo.png"
            alt="Samrat Pandey Logo"
            width={300}
            height={300}
            className="rounded-2xl shadow-xl object-contain"
          />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Hero;