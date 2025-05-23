"use client";

import React, { useState } from "react";
import { useScrollFadeIn } from "@/Hooks/useScrollFadeIn"; 
import { FaStar } from "react-icons/fa"; 

const AcademicDocument = () => {
  const [hovered, setHovered] = useState(false);
  const bachelorAnim = useScrollFadeIn("up", 0.8, 0);
  const higherAnim = useScrollFadeIn("up", 0.8, 0.1);
  const schoolAnim = useScrollFadeIn("up", 0.8, 0.2);

  return (
    <section className="md:px-32 md:flex items-center py-10 text-white  ">
  <div className="max-w-8xl mx-auto">
  
        <div
          className="flex items-center gap-2 mb-12"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-3xl font-bold text-slate-700">Academic Background</h2>
          {hovered && (
            <FaStar className="text-yellow-400 animate-bounce transition duration-300" />
          )}
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
          <div
            className="bg-slate-900 rounded-lg p-6 border-l-4 border-yellow-400 shadow-md hover:shadow-yellow-400 transition"
            ref={bachelorAnim.ref}
            style={bachelorAnim.style}
          >
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">
              Bachelor’s Degree
            </h3>
            <p className="text-slate-300">
              <strong>Program:</strong> BSc (Hons) Information Technology<br />
              <strong>University:</strong> University of Sunderland, UK<br />
              <strong>College:</strong> ISMT College, Kathmandu, Nepal<br />
              <strong>Duration:</strong> Sep 2018 – Aug 2022<br />
              <strong>Status:</strong> Completed
            </p>
          </div>

      
          <div
            className="bg-slate-900 rounded-lg p-6 border-l-4 border-yellow-400 shadow-md hover:shadow-yellow-400 transition"
            ref={higherAnim.ref}
            style={higherAnim.style}
          >
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">
              Higher Secondary Education (10+2)
            </h3>
            <p className="text-slate-300">
              <strong>Board:</strong> CBSE, India<br />
              <strong>Stream:</strong> Science<br />
              <strong>Completed:</strong> 2016
            </p>
          </div>

      
          <div
            className="bg-slate-900 rounded-lg p-6 border-l-4 border-yellow-400 shadow-md hover:shadow-yellow-400 transition"
            ref={schoolAnim.ref}
            style={schoolAnim.style}
          >
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">
              School Education (10th Grade)
            </h3>
            <p className="text-slate-300">
              <strong>Board:</strong> CBSE, India<br />
              <strong>Completed:</strong> 2014
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicDocument;
