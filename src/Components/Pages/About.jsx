import { CheckCircle } from "lucide-react";
import aboutImg from "/src/assets/Krunal.jpg";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FFF2F1] py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="About"
              className="w-[auto] h-[auto] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-red-500 rounded-xl opacity-20 blur-xl"></div>
          </div>
        </div>

        <div>
          <p className="text-red-500 font-medium mb-2">About Me</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            A Developer Who Loves Building Clean UI & Powerful Backend Systems
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            I am <span className="font-semibold">Krunal Trivedi</span>, a passionate full-stack developer 
            specializing in <span className="font-semibold">React.js, ASP.NET Core, SQL Server</span> 
            and modern UI design.  
            <br /><br />
            With a strong foundation in computer science through my 
            <span className="font-semibold"> BCA + MCA Integrated degree</span>, I build applications 
            that are fast, scalable, secure, and user-friendly.
          </p>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-red-500" size={20} />
              2+ Years of hands-on development experience
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-red-500" size={20} />
              Strong full-stack experience (React + .NET Core)
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-red-500" size={20} />
              UI/UX-focused with clean coding practices
            </li>
          </ul>

          <div className="grid grid-cols-3 text-center mb-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">02+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600 text-sm">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-600 text-sm">Technologies</p>
            </div>
          </div>

          <a
            href="/Krunal-Trivedi-Resume.pdf"
            download
            className="inline-block px-8 py-3 bg-red-500 text-white rounded-md text-base font-medium hover:bg-red-600 transition shadow-md"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
