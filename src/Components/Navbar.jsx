import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });

    setMobileOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-[#FFF2F1] shadow-sm" : "bg-[#FFF2F1]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Krunal<span className="text-[#FF7A59]">.</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-700 font-normal items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Skills & Technologies
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Contact
          </button>
        </ul>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFF2F1] shadow-xl 
  transition-transform duration-300 md:hidden z-50 ${
    mobileOpen ? "translate-x-0" : "-translate-x-full"
  }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#f4cccc]">
          <h1 className="text-2xl font-bold text-gray-800">
            Krunal<span className="text-[#FF7A59]">.</span>
          </h1>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-800"
          >
            <X size={30} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 mt-6 text-gray-700">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Skills & Technologies
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#ff6a40] cursor-pointer"
          >
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}