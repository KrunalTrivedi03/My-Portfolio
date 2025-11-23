import { Github, ExternalLink } from "lucide-react";
import project1 from "/src/assets/image.png";
import project2 from "/src/assets/picture1.jpg";
import project3 from "/src/assets/image.png";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Smart Shipping Portal",
      description:
        "A full-stack logistics platform with real-time rate fetching, quote management, and booking workflow using React + .NET Core.",
      tech: ["React.js", "ASP.NET Core", "SQL Server", "TailwindCSS"],
      github: "https://github.com/yourusername/smart-shipping",
      live: "#",
      image: project1,
    },
    {
      id: 2,
      title: "Role & Permission Management System",
      description:
        "Dynamic RBAC system with permission assignment, menus, and secure API authorization. Fully modular and scalable.",
      tech: ["React.js", "C#", ".NET API", "Redux Toolkit"],
      github: "https://github.com/yourusername/role-permission-system",
      live: "#",
      image: project2,
    },
    {
      id: 3,
      title: "Real-Time Chat App",
      description:
        "A chat app built using React and SignalR featuring real-time messaging, unread counts, and chat notifications.",
      tech: ["React.js", "SignalR", ".NET API", "SQL Server"],
      github: "https://github.com/yourusername/chat-app",
      live: "#",
      image: project3,
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#FFF2F1] py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            A collection of my best work built using full-stack technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl transition duration-300 border border-red-100 overflow-hidden group"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-800 hover:text-red-500 transition"
                  >
                    <Github size={20} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
