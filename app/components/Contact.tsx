"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-white"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
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
            Let&apos;s Connect
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have an idea, opportunity, or simply want to connect?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-8 backdrop-blur-sm">

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
                Let&apos;s build something meaningful
              </p>

              <h3 className="mb-5 text-3xl font-bold">
                Have a project or idea?
              </h3>

              <p className="mb-8 leading-7 text-gray-400">
                Whether it&apos;s an AI project, robotics idea, research
                collaboration, or technology opportunity, feel free to
                reach out.
              </p>

              {/* Email */}
              <div className="mb-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:innovativealok3@gmail.com"
                  className="text-lg text-gray-200 transition hover:text-blue-400"
                >
                  innovativealok3@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="mb-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Location
                </p>

                <p className="text-lg text-gray-300">
                  India
                </p>
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Connect with me
                </p>

                <div className="flex flex-wrap gap-3">

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/alok-mishra-cst/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/innovatialokji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-8 shadow-2xl backdrop-blur-sm">

              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Send Message →
                </motion.button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}