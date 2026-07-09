import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projetos" className="bg-base-900 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-sm tracking-widest text-signal">
          03 · trabalhos
        </p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Projetos
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
