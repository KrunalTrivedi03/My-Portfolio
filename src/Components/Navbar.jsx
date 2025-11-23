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

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-[#FFF2F1] shadow-sm" : "bg-[#FFF2F1]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Krunal<span className="text-red-500">.</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-700 font-normal items-center">
          <li>
            <a href="#home" className="hover:text-red-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-red-500 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-red-500 transition">
              Project
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-red-500 transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-red-500 transition">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact us
            </a>
          </li>
          <li>
            <a
              href="#hire"
              className="px-7 py-3 bg-[#FF7A59] text-white rounded-md hover:bg-[#ff6a40] transition font-normal"
            >
              Hire us
            </a>
          </li>
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
        <div className="flex items-center justify-between px-6 py-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">
            Krunal<span className="text-red-500">.</span>
          </h1>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-800"
          >
            <X size={30} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 mt-6 text-gray-700">
          <li>
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 hover:text-red-500"
            >
              Contact us
            </a>
          </li>

          <li className="pt-6">
            <a
              href="#hire"
              onClick={() => setMobileOpen(false)}
              className="block px-7 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 text-center"
            >
              Hire us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}