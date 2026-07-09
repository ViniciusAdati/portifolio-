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
          Desenvolvedor {/*Engenheiro da computação */}
          <span className="text-signal"> // </span>
          React · NestJS · Node . Python
        </p>

        {/* <p className="mx-auto mt-5 max-w-xl text-balance text-sm text-slate-400 sm:text-base">
          Construindo produtos de ponta a ponta — de dashboards com IA a
          sistemas embarcados de automação. Assista à minha apresentação abaixo.
        </p> */}

        {/* ==================================================================
            ESPAÇO PARA O VÍDEO DE APRESENTAÇÃO
            ------------------------------------------------------------------
            OPÇÃO 1 (recomendada): iframe do YouTube.
            Suba o vídeo como "Não Listado" e substitua SEU_VIDEO_ID abaixo.
            ================================================================== */}
        <div className="relative mt-10 w-full max-w-3xl">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-signal/40 to-accent/40 opacity-40 blur-xl" />
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-base-600 bg-base-800 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Vídeo de apresentação — Vinicius Adati"
              // Necessário para autoplay silencioso funcionar de forma cross-browser
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* ==================================================================
              OPÇÃO 2 (alternativa): vídeo nativo HTML5, hospedado externamente
              (ex: Cloudflare Stream, S3, Bunny). NÃO recomendado subir o
              arquivo de vídeo direto no repositório do GitHub Pages.
              Para usar, comente o <iframe> acima e descomente o bloco abaixo.
              ==================================================================

              <video
                className="h-full w-full object-cover"
                src="URL_DO_SEU_VIDEO.mp4"
                poster="/projects/video-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
          */}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projetos"
            className="rounded-lg bg-signal px-7 py-3 font-medium text-base-900 transition hover:bg-signal/90 focus-visible:outline-signal"
          >
            Ver Projetos
          </a>
          <a
            href="/curriculo-vinicius-adati.pdf" // TODO: adicionar o PDF em /public
            target="_blank"
            rel="noopener noreferrer"
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
