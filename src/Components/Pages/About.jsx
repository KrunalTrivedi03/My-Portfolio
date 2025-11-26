import { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import aboutImg from "/src/assets/Krunal.jpg";
import ResumePDF from "/src/assets/Resume_Krunal_Trivedi.pdf";

export default function About() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section id="about" className="w-full bg-[#FFF2F1] py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={aboutImg}
                alt="About"
                className="w-[auto] h-[auto] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#FF7A59] rounded-xl opacity-20 blur-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-[#FF7A59] font-medium mb-2">About Me</p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              A Developer Who Loves Building Clean UI & Powerful Backend Systems
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              I am <span className="font-semibold">Krunal Trivedi</span>, a passionate full-stack developer 
              specializing in <span className="font-semibold">React.js, ASP.NET Core, SQL Server</span> and modern UI design.  
              <br /><br />
              With a strong foundation in computer science through my 
              <span className="font-semibold"> BCA + MCA Integrated degree</span>, I build applications 
              that are fast, scalable, secure, and user-friendly.
            </p>

            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#FF7A59]" size={20} />
                1.5+ Years of hands-on development experience
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#FF7A59]" size={20} />
                Strong full-stack experience (React + .NET Core)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#FF7A59]" size={20} />
                UI/UX-focused with clean coding practices
              </li>
            </ul>

            <div className="grid grid-cols-3 text-center mb-10">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">1.5+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">9+</h3>
                <p className="text-gray-600 text-sm">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">6+</h3>
                <p className="text-gray-600 text-sm">Technologies</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setOpenModal(true)}
                className="px-8 py-3 bg-[#FF7A59] cursor-pointer text-white rounded-md text-base font-medium hover:bg-[#ff6a40] transition shadow-md"
              >
                View Resume
              </button>

              <a
                href={ResumePDF}
                download="Resume_Krunal_Trivedi.pdf"
                className="px-8 py-3 border border-[#FF7A59] cursor-pointer text-[#FF7A59] rounded-md text-base font-medium hover:bg-[#FFF0EB] transition"
              >
                Download PDF
              </a>
            </div>
          </div>

        </div>
      </section>

      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[70%] lg:w-[55%] h-[80%] rounded-xl shadow-2xl relative overflow-hidden">
            
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
            >
              <X size={20} />
            </button>

            <iframe
              src={ResumePDF}
              className="w-full h-full rounded-xl"
              title="Resume Preview"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
