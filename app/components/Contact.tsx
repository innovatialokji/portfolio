export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0B1120] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Have an idea, opportunity, or simply want to connect?
            I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's build something meaningful.
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              Whether it's an AI project, robotics idea, research
              collaboration, or a technology opportunity, feel free to
              reach out.
            </p>

            {/* Email */}
            <div className="mb-6">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                Email
              </p>

              <a
                href="mailto:innovativealok3@gmail.com"
                className="text-lg text-blue-400 hover:text-blue-300 transition"
              >
                innovativealok3@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="mb-6">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                Location
              </p>

              <p className="text-lg text-gray-300">
                India
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
                Connect
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="border border-gray-700 rounded-lg px-4 py-2 hover:border-blue-500 hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="border border-gray-700 rounded-lg px-4 py-2 hover:border-blue-500 hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827]">

            <form className="space-y-6">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-700 bg-[#0B1120] px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-700 bg-[#0B1120] px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-700 bg-[#0B1120] px-4 py-3 text-white outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}