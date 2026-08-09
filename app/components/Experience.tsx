export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0B1120] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience <span className="text-blue-500">& Impact</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* AI Coach */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-2">
              1M1B
            </p>

            <h3 className="text-2xl font-bold mb-2">
              AI Coach
            </h3>

            <p className="text-gray-500 mb-5">
              2026 – Present
            </p>

            <p className="text-gray-400 leading-7">
              Conducting AI awareness and learning sessions for students,
              helping them understand Artificial Intelligence through
              practical examples, real-world applications, and interactive
              activities.
            </p>
          </div>

          {/* Technical Leadership */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-2">
              Student Development Council
            </p>

            <h3 className="text-2xl font-bold mb-2">
              Technical Leadership
            </h3>

            <p className="text-gray-500 mb-5">
              College Leadership
            </p>

            <p className="text-gray-400 leading-7">
              Contributing to technical activities, student initiatives,
              events, and technology-driven projects while helping students
              explore innovation and emerging technologies.
            </p>
          </div>

          {/* Research */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-2">
              Research
            </p>

            <h3 className="text-2xl font-bold mb-2">
              Research & Innovation
            </h3>

            <p className="text-gray-500 mb-5">
              AI • IoT • Technology
            </p>

            <p className="text-gray-400 leading-7">
              Exploring Artificial Intelligence, Machine Learning, IoT
              security, and emerging technologies through research,
              experimentation, and technical projects.
            </p>
          </div>

          {/* Robotics */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-2">
              Robotics & IoT
            </p>

            <h3 className="text-2xl font-bold mb-2">
              Project Development
            </h3>

            <p className="text-gray-500 mb-5">
              Robotics • Arduino • IoT
            </p>

            <p className="text-gray-400 leading-7">
              Building practical technology projects involving robotics,
              Arduino, IoT, automation, sensors, and intelligent systems
              to solve real-world problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}