import { education } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-line overflow-hidden">
      <SideLabel text="EDUCATION" />
      <div className="relative">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-10">Education</h2>
        <div className="space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-xl">{edu.institution}</h3>
                <p className="text-navy-light text-sm mt-1">{edu.degree}</p>
                <p className="text-muted text-sm mt-3 leading-relaxed max-w-2xl">{edu.description}</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end gap-2 shrink-0">
                <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-surfaceAlt border border-navy-light/50 text-muted">
                  {edu.period}
                </span>
                {edu.nilai && (
                  <span className="text-sm font-semibold px-3 py-1.5 rounded-full bg-navy border border-line text-white">
                    {edu.nilai}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}