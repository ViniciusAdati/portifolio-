export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-terminal-grid px-6 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-signal">
          $ whoami
        </p>

        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Vinicius S. Adati
        </h1>

        <p className="mt-4 font-mono text-lg text-slate-300 sm:text-xl">
          Desenvolvedor
          <span className="text-signal"> // </span>
          React · NestJS · Node . Python
        </p>

        <div className="relative mt-10 w-full max-w-xs sm:max-w-sm">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-signal/40 to-accent/40 opacity-40 blur-xl" />
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-base-600 bg-base-800 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/kcwLGiWq_JM"
              title="Vídeo de apresentação — Vinicius Adati"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projetos"
            className="rounded-lg bg-signal px-7 py-3 font-medium text-base-900 transition hover:bg-signal/90 focus-visible:outline-signal"
          >
            Ver Projetos
          </a>

          <a
            href={`${import.meta.env.BASE_URL}curriculo-vinicius-adati.pdf`}
            download="Currículo - Vinicius Adati.pdf"
            className="rounded-lg border border-base-600 bg-base-800/60 px-7 py-3 font-medium text-slate-200 transition hover:border-signal/60 hover:text-signal"
          >
            Meu Currículo
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre Mim"
        className="absolute bottom-8 z-10 animate-bounce text-slate-500 transition hover:text-signal"
      >
        ↓
      </a>
    </section>
  );
}
