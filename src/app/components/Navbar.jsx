"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-transparent  text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 ">
     
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-widest">
        <li><a href="#" className="hover:text-white transition">My Account</a></li>
        <li><a href="#" className="hover:text-white transition">Discover</a></li>
        <li><a href="#" className="hover:text-white transition">New World</a></li>
        <li><a href="#" className="hover:text-white transition">Community</a></li>
        <li><a href="#" className="hover:text-white transition">About Us</a></li>
      </ul>
      
      {/* Connect Button (Visible on all screens) */}
      <button className="hidden md:block px-4 py-2 border border-white rounded-lg text-sm uppercase tracking-widest hover:bg-white hover:text-black transition mr-6">Connect</button>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden px-4 py-2 border border-white rounded-lg text-sm uppercase tracking-widest hover:bg-white hover:text-black transition mr-6"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 p-4 flex flex-col items-center space-y-4 md:hidden">
          <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>My Account</a>
          <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Discover</a>
          <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>New World</a>
          <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Community</a>
          <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>About Us</a>
          <button className="px-4 py-2 border border-white rounded-lg text-sm uppercase tracking-widest hover:bg-white hover:text-black transition" onClick={() => setMenuOpen(false)}>Connect</button>
        </div>
      )}
    </nav>
  );
}
