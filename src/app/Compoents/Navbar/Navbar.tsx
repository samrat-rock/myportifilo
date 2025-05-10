"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faDiagramProject,
  faUser,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`bg-slate-500 text-slate-100 py-1 transition-transform duration-1000 ease-out m-5 z-50 
      rounded-lg md:rounded-full sticky  ${navbarVisible ? "transform translate-y-0" : "transform -translate-y-full"}`}
  >
  
  
  
  <div className="md:flex md:justify-between  md:px-4  py-3  gap-4">

        <div className="font-bold text-2xl rounded-lg md:flex items-center text-nowrap text-center md:pl-2">
          <h3>samrat pandey</h3>
        </div>
         <div className="hidden md:flex  lg:space-x-6 md:space-x-2 text-2xl font-bold ">
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="hover:text-slate-400 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2 text-slate-200"
          >
            <FontAwesomeIcon icon={faHouse} className="w-6" />
            Home
          </Link>
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="hover:text-slate-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 text-slate-200"
          >
            <FontAwesomeIcon icon={faUser} className="w-5" />
            About
          </Link>
          <Link
            href="#projects"
            onClick={handleLinkClick}
            className="hover:text-slate-400 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2 text-slate-200"
          >
            <FontAwesomeIcon icon={faDiagramProject} className="w-6" />
            Projects
          </Link>
          <Link
            href="#contributions"
            onClick={handleLinkClick}
            className="hover:text-slate-400 text-slate-200 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-6" />
            Contributions
          </Link>
        </div>

        <div className="hidden md:flex bg-white px-2  py-2 rounded-full font-bold text-2xl items-center gap-2">
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="hover:text-slate-400 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2 text-slate-700"
          >
            <FontAwesomeIcon icon={faAddressCard} className="w-6" />
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-bold text-lg">
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="flex items-center gap-2 hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faHouse} />
            Home
          </Link>
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="flex items-center gap-2 hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faUser} />
            About
          </Link>
          <Link
            href="#projects"
            onClick={handleLinkClick}
            className="flex items-center gap-2 hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faDiagramProject} />
            Projects
          </Link>
          <Link
            href="#contributions"
            onClick={handleLinkClick}
            className="flex items-center gap-2 hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contributions
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="flex items-center gap-2 hover:text-slate-300"
          >
            <FontAwesomeIcon icon={faAddressCard} />
            Contact
          </Link>
        </div>
      )}

<div className="md:hidden absolute right-4 top-4">
          <button onClick={handleMenuToggle} className="text-white text-2xl">
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
