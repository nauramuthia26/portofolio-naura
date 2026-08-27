import { certificates } from '../data.js'
import { ClassTag, SideLabel } from './SectionLabel.jsx'

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad border-t border-line overflow-hidden">
      <SideLabel text="CERTIFICATES" />
      <div className="relative">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-10">Certificates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map((c, i) => (
            <figure key={i} className="card rounded-xl overflow-hidden group">
              <div className="aspect-[4/3] bg-surfaceAlt overflow-hidden">
                <img
                  src={c.src}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <figcaption className="p-3">
                <p className="font-medium text-sm">{c.title}</p>
                <p className="font-mono text-xs text-muted mt-1">{c.issuer} · {c.year}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
