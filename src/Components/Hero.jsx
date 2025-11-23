
export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-[#FFF2F1] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-red-500 font-medium text-lg tracking-wide">
            Hi There, I'm Krunal Trivedi
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
            Full Stack <br /> Developer
          </h1>

          <p className="text-gray-600 max-w-lg leading-relaxed text-base">
            Passionate about building clean, modern, scalable applications using
            <span className="font-semibold">
              {" "}
              React.js, ASP.NET Core, and SQL Server
            </span>
            . Dedicated to delivering user-friendly interfaces and robust
            backend systems.
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
              className="text-gray-900 text-base font-medium flex items-center gap-2 hover:text-red-500 transition group"
            >
              See my work
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[650px] md:h-[750px]">
          <div className="absolute w-[700px] h-[700px] rounded-full bg-red-200 opacity-20 blur-2xl"></div>

          <div className="absolute w-[550px] h-[550px] border border-red-300 rounded-full opacity-60"></div>
          <div className="absolute w-[450px] h-[450px] border border-red-300 rounded-full opacity-70"></div>
          <div className="absolute w-[350px] h-[350px] border border-red-300 rounded-full opacity-80"></div>

          <div className="absolute w-[580px] h-[580px] opacity-70">
            <div className="absolute left-1/2 top-0 h-full w-[1.5px] bg-red-300 -translate-x-1/2"></div>
            <div className="absolute top-1/2 w-full h-[1.5px] bg-red-300 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
