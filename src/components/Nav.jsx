import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiences' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/85 border-b border-line">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#top" className="font-display font-extrabold text-lg tracking-tight text-navy-light">
          NAURA<span className="text-ink">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-navy-light transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className="md:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-line px-6 py-4 gap-4 text-sm font-medium text-muted bg-bg">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={handleLinkClick} className="block hover:text-navy-light transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}