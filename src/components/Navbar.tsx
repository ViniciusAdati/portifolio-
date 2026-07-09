const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-base-600/60 bg-base-900/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-mono text-sm text-signal">
          va<span className="text-slate-500">.dev</span>
        </a>
        <ul className="hidden gap-8 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-signal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
