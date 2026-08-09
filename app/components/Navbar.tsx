"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          Alok<span className="text-blue-400">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-400 md:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="mt-2 rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}