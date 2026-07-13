import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, imageUrl, repoUrl, liveUrl } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-base-600 bg-base-800 transition hover:border-signal/50 hover:shadow-[0_0_30px_-10px_rgba(76,224,179,0.25)]">
      {/* Imagem de capa — troque o arquivo em /public/projects */}
      <div className="aspect-video w-full overflow-hidden bg-base-700">
        <img
          src={imageUrl}
          alt={`Capa do projeto ${title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-base-600 px-3 py-1 font-mono text-xs text-signal"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-signal hover:underline"
            >
              Código →
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-signal hover:underline"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
