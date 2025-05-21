"use client";

import React from "react";

const projects = [
  {
    name: "Library Management",
    url: "https://github.com/samrat-rock/librarymanagment",
    description: "A system to manage books, members, and lending efficiently.",
    about: `This project is a comprehensive Library Management System designed to automate book cataloging, track lending status, and manage user memberships. It implements core concepts such as database relationships for users, books, and transactions, ensuring real-time inventory and overdue tracking.`,
    deeperConcept: `Key concepts include relational database design, CRUD operations, user authentication and authorization, and transaction management. It addresses concurrency in book lending and returns, and supports fine calculations for overdue books.`,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Restaurant Management",
    url: "https://github.com/samrat-rock/Restromanagement",
    description: "Backend and frontend for restaurant order and staff management.",
    about: `A full-stack solution tailored to streamline restaurant operations including table management, order tracking, and staff scheduling. It connects kitchen staff with waiters and manages order statuses in real-time.`,
    deeperConcept: `Focuses on asynchronous data flow, real-time updates via websockets or polling, role-based access control for staff, and state management on frontend frameworks. Efficient UI/UX design ensures minimal delays in order processing.`,
    image: "https://images.unsplash.com/photo-1555992336-03a23c2b17e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "My Portfolio",
    url: "https://github.com/samrat-rock/myportifilo",
    description: "Personal portfolio website showcasing my skills and projects.",
    about: `A personal portfolio website that highlights projects, skills, and experience. It features responsive design, smooth animations, and SEO optimization to effectively present a professional profile online.`,
    deeperConcept: `Implements responsive web design principles using CSS frameworks like Tailwind CSS, performance optimization, accessibility standards, and deployment strategies. Focus on single-page app routing and smooth UI transitions.`,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Edx",
    url: "https://github.com/samrat-rock/edx",
    description: "An educational platform for online courses and learning.",
    about: `An e-learning platform supporting course creation, video lectures, quizzes, and student progress tracking. It enables scalable delivery of educational content across devices and supports instructor-student interactions.`,
    deeperConcept: `Covers video streaming optimizations, secure user authentication, role-based content access, and scalable backend architecture. Uses database schemas optimized for course content, user progress, and assessments.`,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Edxplor",
    url: "https://github.com/samrat-rock/edxplor",
    description: "A learning exploration tool built on top of Edx platform.",
    about: `Edxplor extends the Edx platform by adding features such as personalized learning paths, resource recommendations, and analytics dashboards to help learners explore educational content more effectively.`,
    deeperConcept: `Incorporates data analysis techniques for personalized recommendations, user engagement metrics, and adaptive learning algorithms. Focuses on integrating third-party APIs and enhancing UI with modern React components.`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold mb-10 text-yellow-400 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map(({ name, url, description, image }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative block p-6 bg-slate-700 rounded-lg border border-transparent shadow-lg
              transition-transform duration-300 ease-in-out
              hover:scale-105
            "
          >
            {/* Image */}
            <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{name}</h3>
            <p className="text-gray-300">{description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
