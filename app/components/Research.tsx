export default function Research() {
  return (
    <section
      id="research"
      className="min-h-screen bg-[#0B1120] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            Research & Publications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Exploring <span className="text-blue-500">Innovation</span>
          </h2>
        </div>

        {/* Research Papers */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Research 1 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-3">
              Artificial Intelligence • Big Data
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Machine Learning and Big Data: Synergy, Challenges, and Advancements
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Exploring the relationship between Machine Learning and Big
              Data, including their applications, challenges, and emerging
              advancements in modern intelligent systems.
            </p>

            <button className="text-blue-400 font-semibold hover:text-blue-300 transition">
              View Research →
            </button>
          </div>

          {/* Research 2 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition">
            <p className="text-blue-400 font-semibold mb-3">
              Deep Learning • IoT Security
            </p>

            <h3 className="text-2xl font-bold mb-4">
              A Cutting-Edge Deep Learning Method for Enhancing IoT Security
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Research focused on using Deep Learning techniques to improve
              security in Internet of Things environments and address
              emerging cybersecurity challenges.
            </p>

            <button className="text-blue-400 font-semibold hover:text-blue-300 transition">
              View Research →
            </button>
          </div>

          {/* Research 3 */}
          <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827] hover:border-blue-500 transition md:col-span-2">
            <p className="text-blue-400 font-semibold mb-3">
              Environmental Technology • Biotechnology
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Plastic Degradation & Ethanol Production using Galleria mellonella
            </h3>

            <p className="text-gray-400 leading-7 max-w-4xl">
              An interdisciplinary project exploring the potential of
              <i> Galleria mellonella</i> for plastic degradation and the
              possibilities of converting degraded plastic waste into useful
              products such as ethanol.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}