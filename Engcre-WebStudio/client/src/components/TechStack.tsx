import { Code2, Database, Globe, Layers, Server, Cpu } from "lucide-react";

const techs = [
  { name: "Next.Js", icon: <Globe /> },
  { name: "React.Js", icon: <Code2 /> },
  { name: "Django", icon: <Server /> },
  { name: "Flask", icon: <Database /> },
  { name: "Spring", icon: <Layers /> },
  { name: "Laravel", icon: <Cpu /> },
];

export function TechStack() {
  return (
    <section className="py-12 border-b border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">
          Tecnologias que Dominamos
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {techs.map((tech) => (
            <div key={tech.name} className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                {tech.icon}
              </div>
              <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
