export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#080D19] px-6 py-10 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              Alok <span className="text-blue-500">Mishra</span>
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Building technology. Creating impact.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#research" className="hover:text-blue-400 transition">
              Research
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alok Mishra. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}