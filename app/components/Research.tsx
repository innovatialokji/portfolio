"use client";

import { motion } from "framer-motion";

const research = [
  {
    number: "01",
    area: "Artificial Intelligence • Big Data",
    title:
      "Machine Learning and Big Data: Synergy, Challenges, and Advancements",
    description:
      "An exploration of how Machine Learning and Big Data complement each other, along with their applications, challenges, and emerging advancements in intelligent systems.",
    type: "Research Paper",
  },
  {
    number: "02",
    area: "Deep Learning • IoT Security",
    title:
      "A Cutting-Edge Deep Learning Method for Enhancing IoT Security",
    description:
      "Research focused on applying Deep Learning techniques to strengthen security in Internet of Things environments and address emerging cybersecurity challenges.",
    type: "Research Paper",
  },
  {
    number: "03",
    area: "Environmental Technology • Biotechnology",
    title:
      "Plastic Degradation & Ethanol Production using Galleria mellonella",
    description:
      "An interdisciplinary project exploring the potential of Galleria mellonella for plastic degradation and the possibilities of converting degraded plastic waste into useful products.",
    type: "Research Project",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-white"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]"
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
            Research & Publications
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Exploring <span className="text-blue-500">Innovation</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Research and technical work exploring emerging technologies,
            intelligent systems, security, and environmental innovation.
          </p>
        </motion.div>

        {/* Research List */}
        <div className="space-y-6">
          {research.map((paper, index) => (
            <motion.article
              key={paper.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] md:p-9"
            >
              <div className="flex flex-col gap-7 md:flex-row">

                {/* Number */}
                <div className="shrink-0">
                  <p className="text-4xl font-bold text-blue-500/30 transition-colors group-hover:text-blue-500/60">
                    {paper.number}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-blue-400">
                      {paper.area}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                      {paper.type}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold leading-tight transition-colors group-hover:text-blue-400 md:text-3xl">
                    {paper.title}
                  </h3>

                  <p className="max-w-4xl leading-7 text-gray-400">
                    {paper.description}
                  </p>

                  {/* Future Paper Link */}
                  <button
                    type="button"
                    className="mt-6 text-sm font-semibold text-gray-500 transition hover:text-blue-400"
                  >
                    View Publication →
                  </button>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}