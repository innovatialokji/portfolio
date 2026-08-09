"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "Robotics • Arduino",
    title: "Automatic Fire Extinguisher Robot",
    description:
      "An Arduino-based autonomous robot that detects flames using sensors and activates a water pump to help extinguish the fire.",
    technologies: ["Arduino", "Sensors", "Robotics"],
  },
  {
    category: "IoT • Smart Systems",
    title: "Smart Home Automation",
    description:
      "A smart automation system designed to control household appliances using connected devices, sensors, and IoT technologies.",
    technologies: ["IoT", "Automation", "Sensors"],
  },
  {
    category: "Robotics • Embedded Systems",
    title: "Wireless Gesture-Controlled Robotic Hand",
    description:
      "A robotic hand concept using flex sensors, servo motors, microcontrollers, and wireless communication to reproduce hand gestures.",
    technologies: ["Arduino", "Flex Sensors", "Servo"],
  },
  {
    category: "Web • Government Services",
    title: "Yojna Connect",
    description:
      "A web platform designed to organize and simplify access to government scheme information, including ward-wise and pension-related data.",
    technologies: ["Next.js", "Firebase", "Web"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What I Build
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            A selection of projects where I explore technology, solve
            practical problems, and turn ideas into working systems.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-white/10 bg-[#111827]/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)]"
            >
              {/* Category */}
              <p className="mb-4 text-sm font-semibold text-blue-400">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-7 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition group-hover:border-blue-500/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Future Links */}
              <div className="mt-7 flex gap-5 text-sm font-semibold">
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-blue-400"
                >
                  GitHub →
                </a>

                <a
                  href="#"
                  className="text-gray-500 transition hover:text-blue-400"
                >
                  Live Demo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}