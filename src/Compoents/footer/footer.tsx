"use client";

import React from "react";
import Link from "next/link";
import { FaSpotify, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiGoland } from "react-icons/si";

const Footer = () => {
  
  const spotifyClientId = "YOUR_SPOTIFY_CLIENT_ID";
  const redirectUri = "http://localhost:3000/api/spotify/callback"; 

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${spotifyClientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=user-read-private%20user-read-email`;

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-yellow-400">Samrat Pandey</h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            I&apos;m a Front-End Developer focused on building visually appealing and performant UIs using React, Next.js, and Tailwind CSS. I also work with GoLang on the backend.
          </p>

          
          <div className="flex items-center gap-4 mt-4">
            <FaSpotify className="text-green-500 text-3xl" />
            <a
              href={spotifyAuthUrl}
              className="bg-green-500 text-slate-900 font-medium px-4 py-2 rounded hover:bg-green-400 transition"
            >
              Login with Spotify
            </a>
          </div>
        </div>

        
        <div className="flex-1 space-y-6 text-center lg:text-left">
        
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xl text-slate-400">
              <FaReact title="React" />
              <SiNextdotjs title="Next.js" />
              <SiTailwindcss title="Tailwind CSS" />
              <FaNodeJs title="Node.js" />
              <SiGoland title="GoLang" />
              <FaGithub title="GitHub" />
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Quick Links</h3>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
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
        </div>

        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Contact</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

      
      <div className="mt-10 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Samrat Pandey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
