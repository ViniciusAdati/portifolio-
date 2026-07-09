const links = [
  {
    label: "GitHub",
    href: "https://github.com/ViniciusAdati",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinicius-adati/",
    icon: "⟡",
  },
  {
    label: "E-mail",
    href: "mailto:viniciusadati2002@gmail.com",
    icon: "✉",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-terminal-grid px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-sm tracking-widest text-signal">
          04 · contato
        </p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          Aberto a oportunidades e colaborações. Me chame em qualquer um dos
          canais abaixo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-56 items-center justify-center gap-2 rounded-lg border border-base-600 bg-base-800 px-6 py-3 font-medium text-slate-200 transition hover:border-signal/60 hover:text-signal"
            >
              <span aria-hidden>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-20 font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} Vinicius Adati — feito com React &
          Tailwind
        </p>
      </div>
    </section>
  );
}
