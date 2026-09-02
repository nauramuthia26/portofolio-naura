import { useState } from 'react'
import { certificates } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'

export default function Certificates() {
  const [active, setActive] = useState(null)

  return (
    <section id="certificates" className="section-pad border-t border-line overflow-hidden">
      <SideLabel text="CERTIFICATES" />
      <div className="relative">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-10">Certificates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map((c, i) => (
            <figure
              key={i}
              className="card rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setActive(c)}
            >
              <div className="aspect-[4/3] bg-white overflow-hidden relative flex items-center justify-center">
                <img
                  src={c.src}
                  alt={c.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.classList.add('bg-surfaceAlt')
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-black/60 px-3 py-1 rounded-full">
                    View Details
                  </span>
                </div>
              </div>
              <figcaption className="p-3">
                <p className="font-medium text-sm">{c.title}</p>
                <p className="text-xs text-muted mt-1">{c.issuer} · {c.year}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-10"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 bg-white overflow-auto flex items-center justify-center p-4">
              <img src={active.src} alt={active.title} className="max-w-full max-h-[60vh] object-contain" />
            </div>
            <div className="p-4 border-t border-line flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-medium text-sm">{active.title}</p>
                <p className="text-xs text-muted mt-1">{active.issuer} · {active.year}</p>
              </div>
              <div className="flex items-center gap-2">
                {active.credentialUrl && (
                  <a
                    href={active.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-2 rounded-full bg-navy text-white hover:opacity-90"
                  >
                    Verifikasi →
                  </a>
                )}
                <button
                  onClick={() => setActive(null)}
                  className="text-xs font-medium px-3 py-2 rounded-full border border-line hover:bg-surfaceAlt"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}