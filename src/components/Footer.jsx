export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-line flex flex-col md:flex-row justify-between gap-2 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Naura. </span>
      <a href="#top" className="hover:text-navy-light">Back to top ↑</a>
    </footer>
  )
}
