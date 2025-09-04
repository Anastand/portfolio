import { cn } from "@/lib/utils";
import Badge from "./ui/badge";

function Workwith({ className }: { className?: string }) {
  // Frontend stack
  const frontendTechnologies = [
    { title: "Next.js" },
    { title: "React" },
    { title: "TypeScript" },
    { title: "JavaScript" },
    { title: "Tailwind CSS" },
    // { title: "GSAP" },
  ];

  // Backend stack
  const backendTechnologies = [
    { title: "Node.js" },
    { title: "Express" },
    { title: "GraphQL" },
    { title: "REST APIs" },
    { title: "Prisma" },
  ];

  // Databases
  const databaseTechnologies = [{ title: "MongoDB" }, { title: "PostgreSQL" }];

  // DevOps / Tools
  const devopsTechnologies = [
    { title: "Git" },
    { title: "GitHub" },
    { title: "Vercel" },
  ];

  // UI / Extras
  const otherTechnologies = [
    { title: "Lucide React" },
    { title: "Framer Motion" },
  ];
  return (
    <div className={cn("mx-auto mt-4 max-w-4xl p-8 shadow-acternity rounded-4xl", className)}>
      <h1 className="text-3xl font-extrabold tracking-tight">
        What I Work With
      </h1>
      <div className="md:flex justify-between px-2">
        {/* frontend */}
        <div className=" flex flex-col">
          <div className="mt-2">
            <h1 className="text-lg">Frontend</h1>
            {frontendTechnologies.map((frnt, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-grid rounded-4xl border-2 border-blue-200 bg-white/20 px-1 py-1 text-xs"
              >
                {frnt.title}
              </Badge>
            ))}
          </div>
          {/* backend */}
          <div className="mt-2">
            <h1 className="text-lg">Backend</h1>
            {backendTechnologies.map((bck, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-grid rounded-4xl border-2 border-blue-200 bg-white/20 px-1 py-1 text-xs"
              >
                {bck.title}
              </Badge>
            ))}
          </div>
          {/* database */}
          <div className="mt-2">
            <h1 className="text-lg">Database</h1>
            {databaseTechnologies.map((dbs, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-grid rounded-4xl border-2 border-blue-200 bg-white/20 px-1 py-1 text-xs"
              >
                {dbs.title}
              </Badge>
            ))}
          </div>
        </div>
        <div className="felx felx-col">
          {/* DevOps / Tools */}
          <div className="mt-2">
            <h1 className="text-lg">DevOps / Tools</h1>
            {devopsTechnologies.map((dks, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-grid rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {dks.title}
              </Badge>
            ))}
          </div>
          {/* UI / Extras */}
          <div className="mt-2">
            <h1 className="text-lg">UI / Extras</h1>
            {devopsTechnologies.map((ui, id) => (
              <Badge
                key={id}
                className="shadow-acternity mx-1 mt-1 inline-grid rounded-4xl border-2 border-blue-200 bg-white/20 px-2 py-1 text-xs"
              >
                {ui.title}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workwith;
