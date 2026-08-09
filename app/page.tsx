import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
    </main>
  );
}