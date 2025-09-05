import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { Palette } from "lucide-react"; // moved import to top
import { cn } from "@/lib/utils";
import Badge from "./ui/badge";

function Workwith({ className }: { className?: string }) {
  // Frontend stack
  const frontendTechnologies = [
    { title: "Next.js", icon: SiNextdotjs },
    { title: "React", icon: SiReact },
    { title: "TypeScript", icon: SiTypescript },
    { title: "JavaScript", icon: SiJavascript },
    { title: "Tailwind CSS", icon: SiTailwindcss },
  ];

  // Backend stack
  const backendTechnologies = [
    { title: "Node.js", icon: SiNodedotjs },
    { title: "Express", icon: SiExpress },
    { title: "GraphQL", icon: SiGraphql },
    { title: "REST APIs", icon: null },
    { title: "Prisma", icon: SiPrisma },
  ];

  // Databases
  const databaseTechnologies = [
    { title: "MongoDB", icon: SiMongodb },
    { title: "PostgreSQL", icon: SiPostgresql },
  ];

  // DevOps / Tools
  const devopsTechnologies = [
    { title: "Git", icon: SiGit },
    { title: "GitHub", icon: SiGithub },
    { title: "Vercel", icon: SiVercel },
  ];

  // UI / Extras
  const otherTechnologies = [
    { title: "Lucide React", icon: Palette },
    // { title: "Framer Motion", icon: SiFramer },
  ];

  return (
    <div
      className={cn(
        "shadow-acternity mx-auto mt-4 max-w-4xl rounded-4xl p-8",
        className,
      )}
    >
      <h1 className="text-3xl font-extrabold tracking-tight">
        What I Work With
      </h1>

      <div className="justify-between px-2 md:flex">
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Frontend */}
          <div className="mt-2">
            <h2 className="text-lg">Frontend</h2>
            {frontendTechnologies.map((tech, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-flex items-center gap-2 rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {tech.icon && <tech.icon className="h-4 w-4" />}
                {tech.title}
              </Badge>
            ))}
          </div>

          {/* Backend */}
          <div className="mt-2">
            <h2 className="text-lg">Backend</h2>
            {backendTechnologies.map((tech, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-flex items-center gap-2 rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {tech.icon && <tech.icon className="h-4 w-4" />}
                {tech.title}
              </Badge>
            ))}
          </div>

          {/* Database */}
          <div className="mt-2">
            <h2 className="text-lg">Database</h2>
            {databaseTechnologies.map((tech, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-flex items-center gap-2 rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {tech.icon && <tech.icon className="h-4 w-4" />}
                {tech.title}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {/* DevOps / Tools */}
          <div className="mt-2">
            <h2 className="text-lg">DevOps / Tools</h2>
            {devopsTechnologies.map((tech, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-flex items-center gap-2 rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {tech.icon && <tech.icon className="h-4 w-4" />}
                {tech.title}
              </Badge>
            ))}
          </div>

          {/* UI / Extras */}
          <div className="mt-2">
            <h2 className="text-lg">UI / Extras</h2>
            {otherTechnologies.map((tech, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-flex items-center gap-2 rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {tech.icon && <tech.icon className="h-4 w-4" />}
                {tech.title}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workwith;
