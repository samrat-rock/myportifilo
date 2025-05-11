"use client";

import React from "react";
import { useScrollFadeIn } from "@/Hooks/useScrollFadeIn"; // adjust path as needed

const AcademicDocument = () => {
  const bachelorAnim = useScrollFadeIn("up", 0.8, 0);
  const higherAnim = useScrollFadeIn("up", 0.8, 0.1);
  const schoolAnim = useScrollFadeIn("up", 0.8, 0.2);

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">
          Academic Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bachelor's Degree */}
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

          {/* Higher Secondary */}
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

          {/* School */}
          <div
            className="bg-slate-900 rounded-lg p-6 border-l-4 border-yellow-400 shadow-md hover:shadow-yellow-400 transition md:col-span-2"
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