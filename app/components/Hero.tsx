"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B1120] px-6 pt-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400"
          >
            B.Tech CSE Student • AI • Robotics • IoT
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            Building Technology.
            <br />
            <span className="text-blue-500">
              Creating Impact.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl"
          >
            I&apos;m Alok Mishra, a B.Tech Computer Science & Engineering
            student passionate about Artificial Intelligence, Robotics,
            IoT, software development, and technology-driven innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-gray-700 px-6 py-3.5 font-semibold text-gray-200 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-2xl font-bold text-white">AI</p>
              <p className="mt-1 text-sm text-gray-500">
                Artificial Intelligence
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">IoT</p>
              <p className="mt-1 text-sm text-gray-500">
                Smart Systems
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Robotics</p>
              <p className="mt-1 text-sm text-gray-500">
                Hardware & Automation
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}