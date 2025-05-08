"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const sentence1 = "I am Samrat Pandey";
  const sentence2 = "I am Frontend Developer";
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");

  const [index, setIndex] = useState(1);
  const [displayedText, setDisplayedText] = useState(words1[0]);
  const [isVanishing, setIsVanishing] = useState(false);
  const [isSecondSentence, setIsSecondSentence] = useState(false); 

  useEffect(() => {
    if (index > words1.length && !isVanishing && !isSecondSentence) {
      setIsVanishing(true);
    }

    
    if (isVanishing && index === 0 && !isSecondSentence) {
      setIsSecondSentence(true);
      setIndex(1); 
      setDisplayedText(words2[0]);
      setIsVanishing(false);
    }

    const timeout = setTimeout(() => {
      if (isVanishing) {
    
        setDisplayedText((prev) => prev.split(" ").slice(0, -1).join(" "));
        setIndex((prev) => prev - 1);
      } else {
        
        setDisplayedText(
          isSecondSentence
            ? words2.slice(0, index).join(" ")
            : words1.slice(0, index).join(" ")
        );
        setIndex((prev) => prev + 1);
      }
    }, isVanishing ? 1000 : 700); 

    return () => clearTimeout(timeout);
  }, [index, isVanishing, isSecondSentence]);

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 text-white py-20 h-[60vh] flex justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold transition-all duration-300 ease-in-out">
        {displayedText}
      </h1>
    </div>
  );
};

export default Hero;
