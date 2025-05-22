"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left - Logo & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-400">Samrat Pandey</h2>
          <p className="mt-2 text-sm text-slate-400">
            Crafting intuitive web experiences with passion.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li className="hover:text-yellow-400 transition">
              <Link href="#hero">Home</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <Link href="#academic">Academics</Link>
            </li>
            <li className="hover:text-yellow-400 transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <div className="text-left">
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Quick Contact</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-slate-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Samrat Pandey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
