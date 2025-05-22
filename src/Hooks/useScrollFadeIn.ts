
"use client";

import { useEffect, useRef, useState } from "react";

export const useScrollFadeIn = (
  direction = "up",
  duration = 0.7,
  delay = 0
) => {
  const dom = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (dom.current) observer.observe(dom.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(20px)";
      case "down":
        return "translateY(-20px)";
      case "left":
        return "translateX(20px)";
      case "right":
        return "translateX(-20px)";
      default:
        return "translateY(20px)";
    }
  };

  return {
    ref: dom,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translate(0, 0)" : getTransform(),
      transition: `all ${duration}s ease-in-out ${delay}s`,
    },
  };
};
