export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-blue-400 font-semibold tracking-widest uppercase">
          Welcome to My Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold">
          Hi, I'm <span className="text-blue-500">Alok Mishra</span>
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
          AI Coach • Researcher • Robotics & IoT Enthusiast
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-gray-400 leading-8">
          Passionate about Artificial Intelligence, Robotics, IoT, and building
          impactful technology solutions. I enjoy teaching AI, creating
          innovative projects, and contributing to research that makes
          technology accessible to everyone.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
            View Projects
          </button>

          <button className="rounded-xl border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            Download Resume
          </button>
        </div>
      </section>
    </main>
  );
}