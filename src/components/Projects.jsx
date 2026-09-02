import { projects } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'
import ImageCarousel from './ImageCarousel.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-line overflow-hidden">
      <SideLabel text="PROJECTS" />
      <div className="relative">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-10">Projects</h2>
        <div className="space-y-10">
          {projects.map((proj, i) => (
            <article key={i} className="card rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-[1.1fr,1fr]">
                <ImageCarousel images={proj.documentation} />
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-display font-bold text-2xl">{proj.name}</h3>
                    <span className="text-sm font-medium text-navy-light shrink-0">{proj.period}</span>
                  </div>
                  <p className="mt-3 text-muted leading-relaxed">{proj.summary}</p>

                  <p className="text-sm font-semibold text-navy-light mt-6 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tools.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 border border-line rounded-full text-muted">{t}</span>
                    ))}
                  </div>

                  <p className="text-sm font-semibold text-navy-light mt-6 mb-2">Results</p>
                  <ul className="space-y-1.5 text-muted text-sm">
                    {proj.outcomes.map((o, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-navy-light mt-1">•</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-5 mt-6 items-center">
                    {proj.links.length > 0 ? (
                      proj.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-navy-light hover:underline"
                        >
                          {l.label} →
                        </a>
                      ))
                    ) : (
                      <span className="text-sm font-medium text-muted/60">
                        Private / Not Published
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}