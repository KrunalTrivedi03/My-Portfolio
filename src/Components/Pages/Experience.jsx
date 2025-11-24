import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Full Stack Developer",
      company: "Your Company Name",
      details: [
        "Building scalable full-stack applications using React.js & ASP.NET Core",
        "Designing clean UI and reusable components",
        "Working with SQL Server & Entity Framework for backend operations",
        "Implementing advanced role & permission modules",
      ],
    },
    {
      year: "2022 - 2023",
      role: "Software Developer Intern",
      company: "Your Internship Company",
      details: [
        "Contributed to front-end modules using React.js",
        "Worked with REST APIs and backend architecture",
        "Learned industry-level coding standards",
      ],
    },
    {
      year: "2020 - 2022",
      role: "Freelance Developer",
      company: "Freelance Projects",
      details: [
        "Built websites and dashboards for small clients",
        "Worked on UI/UX improvements",
        "Developed mini full-stack solutions",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-[120px] w-full bg-[#FFF2F1] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Experience Timeline
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            A visual timeline representing my professional journey.
          </p>
        </div>

        <div className="relative w-full overflow-x-auto pb-6">
          <div className="flex items-start gap-20 min-w-max px-4">

            <div className="absolute top-[45px] left-0 w-full h-[3px] bg-[#FF7A59]"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative text-center">
                
                <div className="relative z-10 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FF7A59] text-white flex items-center justify-center shadow-md">
                    <Briefcase size={18} />
                  </div>
                </div>

                <p className="text-red-500 font-semibold mt-3">{exp.year}</p>

                <div className="mt-6 bg-[#FFF5F5] p-6 rounded-xl shadow-md border border-red-100 w-72">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-700 mt-1">{exp.company}</p>

                  <ul className="text-gray-600 mt-4 space-y-2 text-left">
                    {exp.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FF7A59] mt-1">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}