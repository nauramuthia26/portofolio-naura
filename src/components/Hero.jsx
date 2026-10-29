import { profile } from '../data.js'

export default function Hero() {
  const firstName = profile.name.split(' ')[0].toUpperCase()

  return (
    <section id="top" className="relative overflow-hidden section-pad pt-28 md:pt-36 min-h-[90vh] flex items-center">
      {/* Teks NAURA berjalan ke kanan di belakang konten */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none"
      >
        <div className="marquee-right flex w-max font-display font-extrabold text-[20vw] leading-none text-navy/[0.07] whitespace-nowrap">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {[0, 1, 2].map((i) => (
                <span key={i} className="shrink-0 pr-[6vw]">{firstName}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid md:grid-cols-[1.1fr,1fr] gap-12 md:gap-14 items-center w-full">
        <div>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-5 text-sm md:text-base font-medium text-navy-light">
            {profile.role}
          </p>
          {profile.tagline && (
            <p className="mt-6 text-lg text-muted max-w-xl">{profile.tagline}</p>
          )}
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
          {/* Blok navy bergeser di belakang foto untuk kesan kedalaman */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl bg-navy"
          />
          <div className="relative aspect-[4/3] bg-surface border-2 border-navy-light overflow-hidden rounded-2xl">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover object-center"
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