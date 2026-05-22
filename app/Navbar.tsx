"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111827] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Bhavdeep Electricals
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#products" className="hover:text-yellow-400 transition">
              Products
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-xl transition glow-button"
        >
          Get Quote
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] px-6 py-6 border-t border-gray-700 animate-fadeIn">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-xl transition text-center block glow-button"
              >
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
