import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "Oct 2025 - Present",
      role: "Software Developer",
      company: "SNT CodeCraft Pvt Ltd. · Ahmedabad",
      details: [
        "Maintaining shipping & logistics solutions with admin & reporting modules",
        "Building scalable APIs using ASP.NET Core, EF Core, MediatR, Carter",
        "Creating reusable React components with pagination & filtering",
        "Fixing production bugs and improving performance",
      ],
    },
    {
      year: "Jun 2025 - Aug 2025",
      role: "Software Developer",
      company: "Tridhya Tech Ltd. · Ahmedabad",
      details: [
        "Worked on live enterprise systems under senior mentorship",
        "Fixed production bugs and optimized PostgreSQL queries",
        "Worked with Docker and CI/CD pipelines",
      ],
    },
    {
      year: "Feb 2025 - Jun 2025",
      role: "Software Developer Intern",
      company: "Tridhya Tech Ltd. · Ahmedabad",
      details: [
        "Built RBAC user management system",
        "Implemented role & permission-based authorization",
        "Integrated Kanban, calendar, and real-time chat",
      ],
    },
    {
      year: "Jul 2023 - Apr 2024",
      role: "Software Developer",
      company: "Kunte Modha Shah Advisors LLP · Ahmedabad",
      details: [
        "Worked on wealth management investment tracking system",
        "Improved financial data reliability and asset modules",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-[120px] w-full bg-[#FFF2F1] py-14"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Experience Timeline
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Swipe to explore my journey →
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute top-[42px] left-0 w-full h-[3px] bg-[#FF7A59]" />

          <div
            className="
              flex gap-14
              overflow-x-auto no-scrollbar
              px-2 pb-8
              snap-x snap-mandatory
            "
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="
                  relative text-center
                  min-w-[85vw] sm:min-w-[60vw] md:min-w-[300px]
                  snap-center
                "
              >
                {/* Icon */}
                <div className="flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#FF7A59] text-white flex items-center justify-center shadow-md">
                    <Briefcase size={18} />
                  </div>
                </div>

                <p className="text-red-500 font-semibold mt-3">
                  {exp.year}
                </p>

                <div className="mt-6 bg-[#FFF5F5] p-6 rounded-xl shadow-md border border-red-100">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-gray-700 mt-1">
                    {exp.company}
                  </p>

                  <ul className="text-gray-600 mt-4 space-y-2 text-left">
                    {exp.details.map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#FF7A59]">•</span>
                        {d}
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
