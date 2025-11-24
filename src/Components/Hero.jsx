import { useEffect, useState } from "react";
import Illustration from "../assets/Illustration.png";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React.js Developer",
    ".NET Core Developer",
    "SQL Server Specialist",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 800);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setSpeed(deleting ? 60 : 120);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <section id="home" className="scroll-mt-[120px] w-full bg-[#FFF2F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <p className="text-[#FF7A59] text-xl md:text-6xl font-bold text-lg tracking-wide">
            Hi There, I'm Krunal Trivedi
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {roles[index].substring(0, subIndex)}
            <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
          </h1>

          <p className="text-gray-600 max-w-lg leading-relaxed text-base">
            Passionate about building clean, modern, scalable applications using
            <span className="font-semibold"> React.js, ASP.NET Core, and SQL Server </span>.
            Dedicated to delivering user-friendly interfaces and robust backend systems.
          </p>

          <div className="flex gap-8 items-center pt-4">
            <a
              href="#about"
              className="px-8 py-3.5 bg-[#FF7A59] text-white rounded-md text-base font-medium hover:bg-[#ff6a40] transition shadow-md"
            >
              Learn More
            </a>

            <a
              href="#projects"
              className="text-gray-900 text-base font-medium flex items-center gap-2 hover:text-[#FF7A59] transition group"
            >
              See my work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[650px] md:h-[750px]">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-red-200 opacity-20 blur-3xl"></div>

          <div className="absolute w-[550px] h-[550px] border border-red-300 rounded-full opacity-60"></div>
          <div className="absolute w-[450px] h-[450px] border border-red-300 rounded-full opacity-70"></div>
          <div className="absolute w-[350px] h-[350px] border border-red-300 rounded-full opacity-80"></div>

          <div className="absolute w-[580px] h-[580px] opacity-70">
            <div className="absolute left-1/2 top-0 h-full w-[1.5px] bg-red-300 -translate-x-1/2"></div>
            <div className="absolute top-1/2 w-full h-[1.5px] bg-red-300 -translate-y-1/2"></div>
          </div>

          <img
            src={Illustration}
            alt="Developer Illustration"
            className="relative z-10 w-[480px] md:w-[550px] drop-shadow-2xl select-none"
          />
        </div>
      </div>
    </section>
  );
}