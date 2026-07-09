interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Dados & IA" | "Infra";
}

const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Bancos de Dados", category: "Modelagem & Dados" },
  { name: "CI/CD & Pipelines", category: "Docker & AWS" },
  { name: "Python", category: "Dados & IA" },
  { name: "Linux", category: "Infra" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-base-800/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-sm tracking-widest text-signal">
          02 · stack
        </p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Habilidades
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-base-600 bg-base-800 px-4 py-6 text-center transition hover:-translate-y-1 hover:border-signal/60"
            >
              <span className="font-display text-base font-semibold text-white group-hover:text-signal">
                {skill.name}
              </span>
              <span className="font-mono text-xs text-slate-500">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
