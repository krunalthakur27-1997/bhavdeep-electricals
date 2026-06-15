"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#020b18]/95 backdrop-blur-2xl border-b border-blue-900/50 shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-[#020b18]/60 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* Premium glow line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: scrolled
            ? "linear-gradient(to right, rgba(29,78,216,0.8), rgba(255,255,255,0.3), rgba(220,38,38,0.8))"
            : "linear-gradient(to right, rgba(29,78,216,0.3), rgba(255,255,255,0.1), rgba(220,38,38,0.3))",
          transition: "all 0.5s ease",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="shrink-0"
        >
          <Image
            src="/logo-full.png"
            alt="Bhavdeep Electricals"
            width={220}
            height={80}
            className="w-[160px] md:w-[190px] lg:w-[220px] h-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2.5 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(59,130,246,0.15)",
                      border: "1px solid rgba(96,165,250,0.35)",
                      boxShadow:
                        "0 0 20px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                    style={{
                      width: "60%",
                      background: "linear-gradient(to right, #3b82f6, #60a5fa)",
                      boxShadow: "0 0 8px rgba(96,165,250,0.6)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="tel:+919726197976"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="text-sm text-slate-300 hover:text-white font-medium transition-colors"
          >
            📞 +91 97261 97976
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 30px rgba(220,38,38,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-red-600 hover:bg-red-500 text-white text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Inner glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-white/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Quote</span>
          </motion.a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-0.5 bg-white rounded-full block"
          />
          <motion.span
            animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-0.5 bg-white rounded-full block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-0.5 bg-white rounded-full block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#020b18]/98 backdrop-blur-2xl border-t border-blue-900/30"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                    style={
                      isActive
                        ? {
                            background: "rgba(59,130,246,0.15)",
                            border: "1px solid rgba(96,165,250,0.35)",
                            boxShadow: "0 0 15px rgba(59,130,246,0.2)",
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
                <a
                  href="tel:+919726197976"
                  className="text-sm text-slate-300 font-medium flex items-center gap-2"
                >
                  📞 +91 97261 97976
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="bg-red-600 text-white text-sm font-bold px-5 py-3.5 rounded-xl text-center hover:bg-red-500 transition-colors duration-200"
                >
                  Get Free Quote →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
