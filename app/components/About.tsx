"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Artificial Intelligence",
    description:
      "Exploring AI through practical projects, learning, research, and student-focused AI awareness.",
  },
  {
    title: "Robotics",
    description:
      "Building hands-on robotic systems using Arduino, sensors, motors, and automation.",
  },
  {
    title: "IoT",
    description:
      "Working with connected systems and smart automation to turn ideas into practical solutions.",
  },
  {
    title: "Research",
    description:
      "Exploring emerging technologies through research, experimentation, and innovation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
              B.Tech CSE • Technology • Innovation
            </p>

            <h3 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
              Building Technology.
              <br />
              Teaching AI.
              <br />
              <span className="text-blue-500">Creating Impact.</span>
            </h3>

            <p className="mb-5 text-lg leading-8 text-gray-400">
              I am a B.Tech Computer Science & Engineering student passionate
              about Artificial Intelligence, Robotics, IoT, and software
              development. I enjoy turning ideas into practical technology
              solutions.
            </p>

            <p className="text-lg leading-8 text-gray-400">
              Alongside building technology projects, I work as an AI Coach,
              helping students understand Artificial Intelligence through
              simple, practical, and real-world examples.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-sm transition hover:border-blue-500/50"
              >
                <h4 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}