const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Project' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificate' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/85 border-b border-line">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#top" className="font-display font-extrabold text-lg tracking-tight text-navy-light">
          NAURA<span className="text-ink">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wide text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-navy-light transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
