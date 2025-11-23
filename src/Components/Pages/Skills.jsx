import {
  Code2,
  Server,
  Database,
  Wrench,
  Rocket,
  Layers,
} from "lucide-react";

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layers size={34} className="text-red-500" />,
    items: ["React.js", "JavaScript (ES6+)", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server size={34} className="text-red-500" />,
    items: ["ASP.NET Core", "C#", "Entity Framework", "REST API Development"],
  },
  {
    id: 3,
    title: "Database Management",
    icon: <Database size={34} className="text-red-500" />,
    items: ["SQL Server", "Stored Procedures", "Joins & Optimization"],
  },
  {
    id: 4,
    title: "Tools & Platforms",
    icon: <Wrench size={34} className="text-red-500" />,
    items: ["Git & GitHub", "Postman", "Azure Basics", "VS & VS Code"],
  },
  {
    id: 5,
    title: "Problem Solving",
    icon: <Code2 size={34} className="text-red-500" />,
    items: ["Debugging", "Clean Code", "Logical Thinking"],
  },
  {
    id: 6,
    title: "Additional Skills",
    icon: <Rocket size={34} className="text-red-500" />,
    items: ["Team Collaboration", "Agile Workflow", "UI/UX Awareness"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-[#FFF2F1] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            A collection of tools and technologies I work with to build robust 
            and modern applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#FFF5F5] p-8 rounded-xl border border-red-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {skill.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-700">
                {skill.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
