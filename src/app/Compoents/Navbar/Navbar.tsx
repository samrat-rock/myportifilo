"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  useEffect(() => {
    setNavbarVisible(true);
  }, []);

  return (
    <nav
      className={`bg-slate-500 text-slate-100 py-1 transition-transform duration-1000 ease-out m-5 rounded-full ${
        navbarVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="md:flex justify-between items-center px-4 py-3">
        <div className="font-bold text-2xl rounded-lg md:flex items-center">
       
          <h3>samrat pandey</h3>
        </div>
        <div className="hidden md:flex space-x-6 text-2xl font-bold pl-20">
          <Link
            href="#about"
            className="hover:text-slate-400 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2  text-slate-200"
          >
            <FontAwesomeIcon icon={faHouse} className="w-6"/>
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-slate-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2  text-slate-200"
          >
            <FontAwesomeIcon icon={faUser}  className="w-5" />
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-slate-400 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2  text-slate-200"
          >
            <FontAwesomeIcon icon={faDiagramProject} className="w-6"/>
            Projects
          </Link>
         
          <Link
            href="#contributions"
            className="hover:text-slate-400 text-slate-200 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-6"/>
            Contributions
          </Link>
        </div>

        <div className="bg-white px-10 py-2 rounded-full  font-bold text-2xl flex items-center gap-2">
        <Link
            href="#contact"
            className="hover:text-slate-400 transition-all duration-600 transform hover:-translate-y-1 flex items-center gap-2  text-slate-700"
          >
            <FontAwesomeIcon icon={faAddressCard} className="w-6" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
