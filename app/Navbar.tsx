"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#010810]/98 shadow-[0_4px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "bg-blue-950/60 backdrop-blur-md"
      }`}
      aria-label="Main Navigation"
    >
      {/* Tricolor top line */}
      <div className="h-[3px] bg-gradient-to-r from-blue-600 via-white/60 to-red-600" />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center shrink-0 group"
        >
          <Image
            src="/logo-icon.png"
            alt="Bhavdeep Electricals Home"
            width={160}
            height={160}
            className="w-[120px] md:w-[150px] h-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex items-center gap-1 text-sm font-medium"
          role="list"
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-white bg-blue-700/50 border border-blue-500/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 glow-btn-red bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm"
        >
          Get Quote →
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#010810]/98 backdrop-blur-xl border-t border-blue-900/40 px-6 py-6 animate-fadeIn">
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-base font-medium text-slate-300 hover:text-white hover:bg-blue-900/30 px-4 py-3 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="glow-btn-red bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-3.5 rounded-xl block text-center transition-all duration-300"
              >
                Get Free Quote →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
