import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-slate-100 py-4">
    <div className="md:flex justify-between items-center px-20 py-2">
      <div className="font-bold text-2xl rounded-lg md:flex items-center">
        <Image src="/Logo.png" alt="Logo" width={60} height={50} className="inline-block mr-2" />
        <h3>samrat pandey</h3>
      </div>
      <div className="hidden md:flex space-x-6 text-2xl font-bold">
        <Link href="#about" className="hover:text-sky-400 transition-colors duration-300">Home</Link>
        <Link href="#about" className="hover:text-sky-400 transition-colors duration-300">About</Link>
        <Link href="#projects" className="hover:text-sky-400 transition-colors duration-300">Projects</Link>
        <Link href="#skills" className="hover:text-sky-400 transition-colors duration-300">Skills</Link>
        <Link href="#contact" className="hover:text-sky-400 transition-colors duration-300">Contact</Link>
        <Link href="#contributions" className="hover:text-sky-400 transition-colors duration-300">Contributions</Link>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
