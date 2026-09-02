import { internships, organizations } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'
import ImageCarousel from './ImageCarousel.jsx'

function buildProfessional() {
  return internships.map((x) => ({
    type: 'Internship',
    title: x.role,
    org: x.company,
    period: x.period,
    summary: x.summary,
    tools: x.tools,
    outcomes: x.outcomes,
    documentation: x.documentation
  }))
}

function buildOrganizations() {
  return organizations.map((x) => ({
    type: 'Organization',
    title: x.role,
    org: x.name,
    period: x.period,
    summary: x.description,
    tools: [],
    outcomes: [],
    documentation: x.documentation || []
  }))
}

function ExperienceCard({ item }) {
  return (
    <article className="card rounded-2xl overflow-hidden">
      <div className={`grid ${item.documentation?.length ? 'md:grid-cols-[1.1fr,1fr]' : ''}`}>
        {item.documentation?.length > 0 && <ImageCarousel images={item.documentation} />}

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-navy/20 text-navy-light border border-navy/40">
              {item.type}
            </span>
            <span className="text-sm text-muted">{item.period}</span>
          </div>

          <h3 className="font-display font-bold text-2xl mt-3">{item.title}</h3>
          <p className="text-navy-light text-sm font-medium mt-1">{item.org}</p>

          <p className="mt-4 text-muted leading-relaxed">{item.summary}</p>

          {item.tools?.length > 0 && (
            <>
              <p className="text-sm font-semibold text-navy-light mt-6 mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border border-line rounded-full text-muted">{t}</span>
                ))}
              </div>
            </>
          )}

          {item.outcomes?.length > 0 && (
            <>
              <p className="text-sm font-semibold text-navy-light mt-6 mb-2">Key Takeaways</p>
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
  )
}

export default function Experience() {
  const professional = buildProfessional()
  const orgs = buildOrganizations()

  return (
    <section id="experience" className="section-pad border-t border-line overflow-hidden">
      <SideLabel text="EXPERIENCES" />
      <div className="relative">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-10">Professional Experiences</h2>

        <div className="space-y-10">
          {professional.map((item, i) => (
            <ExperienceCard key={i} item={item} />
          ))}
        </div>

        <h3 className="font-display font-extrabold text-3xl md:text-4xl mt-14 mb-10">
          Organization
        </h3>
        <div className="space-y-10">
          {orgs.map((item, i) => (
            <ExperienceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}