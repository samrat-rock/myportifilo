"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faDiagramProject,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const handleScroll = () => {
    setNavbarVisible(window.scrollY <= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-5 py-5 transition-transform duration-500 ease-in-out shadow-lg bg-[#1E293B	]  ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between font-serif">
        <h3 className="text-2xl font-bold text-slate-800">Samrat Pandey</h3>

        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="h-6 w-6 text-yellow-400"
            />
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-slate-900 md:bg-transparent rounded-b-lg md:rounded-none md:flex items-center gap-6 px-6 py-4 md:py-0 transition-all duration-300`}
        >
          {[
            { href: "/", label: "Home", icon: faHouse },
            { href: "/about", label: "About", icon: faAddressCard },
            { href: "/projects", label: "Projects", icon: faDiagramProject },
            { href: "/contact", label: "Contact", icon: faEnvelope },
          ].map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="flex items-center md:px-5 gap-2 text-slate-500 text-2xl font-bold transition hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg"
            >
              <FontAwesomeIcon icon={icon} className="text-xl" />
              <span>{label}</span>
            </Link>
          ))}

      
          <a
            href="https://www.linkedin.com/in/samrat-pandey-464368236/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 md:ml-4 mt-4 md:mt-0 inline-block bg-slate-700 hover:bg-slate-400 text-white font-bold px-4 py-2 rounded-lg transition-all"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
