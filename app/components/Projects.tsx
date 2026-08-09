export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0B1120] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            What I Build
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-3">
              Robotics • Arduino
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Automatic Fire Extinguisher Robot
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              An Arduino-based autonomous robot designed to detect flames
              using sensors and automatically activate a water pump to
              extinguish the fire.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Arduino
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Sensors
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Robotics
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-3">
              IoT • Smart Systems
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Smart Home Automation
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              A smart automation system designed to control household
              appliances using connected devices, sensors, and IoT-based
              technologies.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                IoT
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Automation
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Sensors
              </span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-3">
              Robotics • Embedded Systems
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Wireless Gesture-Controlled Robotic Hand
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              A robotic hand concept using flex sensors, microcontrollers,
              servo motors, and wireless communication to reproduce hand
              gestures.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Arduino
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Flex Sensors
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Robotics
              </span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-3">
              Web • Government Services
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Yojna Connect
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              A web-based platform designed to make government scheme
              information easier to access and organize, with features for
              ward-wise data and pension-related information.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Web Development
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}