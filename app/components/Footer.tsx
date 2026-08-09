"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080D19] px-6 py-12 text-white">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <a
              href="#top"
              className="text-2xl font-bold tracking-tight"
            >
              Alok<span className="text-blue-500">.</span>
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Building technology. Creating impact.
            </p>
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/innovatialokji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/alok-mishra-cst/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
            >
              LinkedIn ↗
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row md:text-left">

          <p>
            © {new Date().getFullYear()} Alok Mishra. All rights reserved.
          </p>

          <p>
            Designed & built with{" "}
            <span className="text-blue-400">code</span> and{" "}
            <span className="text-blue-400">curiosity</span>.
          </p>

        </div>

      </div>
    </footer>
  );
}