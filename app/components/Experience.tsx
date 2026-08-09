"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026 — Present",
    organization: "1M1B",
    role: "AI Coach",
    description:
      "Conducting AI awareness and learning sessions for students, making Artificial Intelligence simple, practical, and accessible through real-world examples and interactive activities.",
  },
  {
    period: "College Leadership",
    organization: "Student Development Council",
    role: "Technical Leadership",
    description:
      "Contributing to technical initiatives, student activities, events, and technology-driven projects while encouraging innovation and practical learning.",
  },
  {
    period: "Ongoing",
    organization: "Research & Innovation",
    role: "Technology Research",
    description:
      "Exploring Artificial Intelligence, Machine Learning, IoT security, robotics, and emerging technologies through research and experimentation.",
  },
  {
    period: "Ongoing",
    organization: "Robotics & IoT",
    role: "Project Development",
    description:
      "Building hands-on projects involving Arduino, sensors, automation, robotics, and connected systems to solve practical problems.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-white"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience <span className="text-blue-500">& Impact</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[9px] top-0 h-full w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`relative flex md:items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Dot */}
                <motion.div
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 z-10 h-5 w-5 rounded-full border-4 border-[#0B1120] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] md:left-1/2 md:-translate-x-1/2"
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.2 }}
                  className="ml-10 w-full rounded-2xl border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-sm transition-colors hover:border-blue-500/50 md:ml-0 md:w-[44%]"
                >
                  <p className="mb-2 text-sm font-semibold text-blue-400">
                    {experience.period}
                  </p>

                  <p className="mb-2 text-sm font-medium text-gray-500">
                    {experience.organization}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {experience.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}