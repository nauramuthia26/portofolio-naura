import { about } from '../data.js'
import { ClassTag } from './SectionLabel.jsx'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line flex justify-center">
      <div className="w-full max-w-3xl bg-navy rounded-3xl px-8 py-12 md:px-14 md:py-16 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 text-white">
          About Me
        </h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-white/75 leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}