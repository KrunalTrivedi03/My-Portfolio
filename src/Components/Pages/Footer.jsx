import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w-full bg-[#FFF2F1] border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-700 font-medium text-sm">
            © {new Date().getFullYear()} Krunal Trivedi • Full Stack Developer
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition text-sm"
            >
              <Mail size={18} />
              Email
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition text-sm"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition text-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-6 bg-[#FF7A59] text-white p-3 rounded-full shadow-lg 
                     hover:bg-[#ff6a40] cursor-pointer transition-all duration-300 transform hover:scale-110 animate-fade-in"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
