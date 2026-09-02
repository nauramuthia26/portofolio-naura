import { profile } from '../data.js'

export default function Hero() {
  const firstName = profile.name.split(' ')[0]

  return (
    <section id="top" className="relative overflow-hidden section-pad pt-28 md:pt-36 min-h-[90vh] flex items-center">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-extrabold text-[22vw] leading-none text-navy/10 select-none pointer-events-none whitespace-nowrap"
      >
        {firstName.toUpperCase()}
      </span>

      <div className="relative grid md:grid-cols-[1.3fr,0.9fr] gap-12 items-center w-full">
        <div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] mt-5">
            {profile.name}
          </h1>
          <p className="mt-5 text-sm md:text-base font-medium text-navy-light">
            {profile.role}
          </p>
          <p className="mt-6 text-lg text-muted max-w-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-line text-ink text-sm font-semibold hover:border-navy-light hover:text-navy-light transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-surface border-2 border-navy-light overflow-hidden rounded-2xl">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-navy text-white text-xs font-medium px-3 py-2 rounded-lg">
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  )
}