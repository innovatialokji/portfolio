export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0B1120] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Building Technology. Teaching AI. Creating Impact.
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-5">
  I am a B.Tech Computer Science & Engineering student passionate about
  Artificial Intelligence, Robotics, IoT, and software development. I enjoy
  exploring emerging technologies and turning innovative ideas into practical
  solutions.
</p>

            <p className="text-gray-400 text-lg leading-8">
              Along with building technology projects, I also work as an AI
              Coach, helping students understand and explore Artificial
              Intelligence in a simple and practical way.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h4 className="text-3xl font-bold text-blue-500 mb-2">
                AI
              </h4>
              <p className="text-gray-400">
                AI Coaching & Exploration
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h4 className="text-3xl font-bold text-blue-500 mb-2">
                IoT
              </h4>
              <p className="text-gray-400">
                Smart & Connected Systems
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h4 className="text-3xl font-bold text-blue-500 mb-2">
                Robotics
              </h4>
              <p className="text-gray-400">
                Hardware & Automation
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-[#111827]">
              <h4 className="text-3xl font-bold text-blue-500 mb-2">
                Research
              </h4>
              <p className="text-gray-400">
                Technology & Innovation
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}