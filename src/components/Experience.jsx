import { internships, organizations } from '../data.js'
import { ClassTag, SideLabel } from './SectionLabel.jsx'
import ImageCarousel from './ImageCarousel.jsx'

// Gabungkan magang & organisasi jadi satu daftar experience.
// Data.js kamu TIDAK perlu diubah — penggabungan terjadi di sini.
function buildExperience() {
  const fromInternships = internships.map((x) => ({
    type: 'Internship',
    title: x.role,
    org: x.company,
    period: x.period,
    summary: x.summary,
    tools: x.tools,
    outcomes: x.outcomes,
    documentation: x.documentation
  }))
  const fromOrganizations = organizations.map((x) => ({
    type: 'Organization',
    title: x.role,
    org: x.name,
    period: x.period,
    summary: x.description,
    tools: [],
    outcomes: [],
    documentation: x.documentation || []
  }))
  return [...fromInternships, ...fromOrganizations]
}

export default function Experience() {
  const items = buildExperience()

  return (
    <section id="experience" className="section-pad border-t border-line overflow-hidden">
      <SideLabel text="EXPERIENCE" />
      <div className="relative">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-10">Experiences</h2>

        <div className="space-y-10">
          {items.map((item, i) => (
            <article key={i} className="card rounded-2xl overflow-hidden">
              <div className={`grid ${item.documentation?.length ? 'md:grid-cols-[1.1fr,1fr]' : ''}`}>
                {item.documentation?.length > 0 && <ImageCarousel images={item.documentation} />}

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-navy/20 text-navy-light border border-navy/40">
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl mt-3">{item.title}</h3>
                  <p className="text-navy-light font-mono text-sm mt-1">{item.org}</p>

                  <p className="mt-4 text-muted leading-relaxed">{item.summary}</p>

                  {item.tools?.length > 0 && (
                    <>
                      <p className="font-mono text-xs uppercase tracking-wide text-navy-light mt-6 mb-2">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((t) => (
                          <span key={t} className="font-mono text-xs px-2 py-1 border border-line rounded-full text-muted">{t}</span>
                        ))}
                      </div>
                    </>
                  )}

                  {item.outcomes?.length > 0 && (
                    <>
                      <p className="font-mono text-xs uppercase tracking-wide text-navy-light mt-6 mb-2">Key Takeaways</p>
                      <ul className="space-y-1.5 text-muted text-sm">
                        {item.outcomes.map((o, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-navy-light mt-1">•</span>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
