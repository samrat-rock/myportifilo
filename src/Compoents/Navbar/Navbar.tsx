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
      className={`sticky top-0 z-50 px-5 py-8 transition-transform duration-500 ease-in-out bg-slate-500 text-white shadow-lg   ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Samrat Pandey</h3>

        
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-6 w-6 text-yellow-400" />
          </button>
        </div>

      
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-slate-900 md:bg-transparent rounded-b-lg md:rounded-none md:flex items-center gap-6 px-6 py-4 md:py-0 transition-all duration-300 `}
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
            className="flex items-center md:px-5 gap-2 text-white lg:text-slate-900  text-2xl font-bold transition hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg"
          >
            <FontAwesomeIcon icon={icon} className="text-xl" />
            <span>{label}</span>
          </Link>
          
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
