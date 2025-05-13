import { Engine } from "@tsparticles/engine"; // Import Engine type
import { loadFull } from "tsparticles";

// Initialize particles engine
export const particlesInit = async (engine: Engine) => {
  // Make sure engine is of the correct type
  try {
    await loadFull(engine); // This ensures all particle engines and effects are loaded
  } catch (error) {
    console.error("Error initializing particles:", error);
  }
};

export const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",  // This can be a valid option like "top", "left", etc.
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
    },
  };
  
