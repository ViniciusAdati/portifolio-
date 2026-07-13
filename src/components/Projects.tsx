import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ITEMS_PER_SLIDE_DESKTOP = 2;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(ITEMS_PER_SLIDE_DESKTOP);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : ITEMS_PER_SLIDE_DESKTOP);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  useEffect(() => {
    setCurrent((prev) => Math.min(prev, totalSlides - 1));
  }, [totalSlides]);

  const goTo = (index: number) => {
    const next = (index + totalSlides) % totalSlides;
    setCurrent(next);
  };

  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  const slides: (typeof projects)[] = [];
  for (let i = 0; i < projects.length; i += itemsPerSlide) {
    slides.push(projects.slice(i, i + itemsPerSlide));
  }

  return (
    <section id="projetos" className="bg-base-900 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-sm tracking-widest text-signal">
          03 · trabalhos
        </p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Projetos
        </h2>

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slideProjects, slideIndex) => (
                <div
                  key={slideIndex}
                  className="grid w-full flex-shrink-0 grid-cols-1 gap-8 px-1 sm:grid-cols-2"
                >
                  {slideProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {totalSlides > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Slide anterior"
                className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-base-600 bg-base-800/90 text-slate-200 backdrop-blur transition hover:border-signal/60 hover:text-signal"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo slide"
                className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-base-600 bg-base-800/90 text-slate-200 backdrop-blur transition hover:border-signal/60 hover:text-signal"
              >
                →
              </button>
            </>
          )}
        </div>

        {totalSlides > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir para o slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-signal"
                    : "w-2 bg-base-600 hover:bg-base-600/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
