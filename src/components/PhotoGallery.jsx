import { useRef, useState } from 'react'

export default function PhotoGallery({ images, label = 'Documentation' }) {
  const [active, setActive] = useState(null)
  const scroller = useRef(null)

  if (!images || images.length === 0) return null

  const current = active !== null ? images[active] : null

  function scrollByCard(direction) {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: direction * 300, behavior: 'smooth' })
  }

  function prev(e) {
    e.stopPropagation()
    setActive((i) => (i - 1 + images.length) % images.length)
  }

  function next(e) {
    e.stopPropagation()
    setActive((i) => (i + 1) % images.length)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-navy-light">{label}</p>
        {images.length > 3 && (
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Geser ke kiri"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-line text-ink hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Geser ke kanan"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-line text-ink hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Lihat foto: ${img.caption || i + 1}`}
            className="group shrink-0 snap-start w-60 md:w-72 text-left"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surfaceAlt">
              <img
                src={img.src}
                alt={img.caption || ''}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            {img.role && (
              <span className="inline-block mt-3 text-xs font-semibold px-2 py-1 rounded-full bg-navy/20 text-navy-light border border-navy/40">
                {img.role}
              </span>
            )}
            <p className={`text-sm font-medium text-ink leading-snug ${img.role ? 'mt-2' : 'mt-3'}`}>
              {img.caption}
            </p>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-10"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.caption || ''}
              className="w-full max-h-[75vh] object-contain rounded-xl bg-white"
            />

            <div className="flex items-start justify-between gap-4 mt-3 text-white">
              <div>
                {current.role && <p className="text-xs font-semibold text-white/70 mb-1">{current.role}</p>}
                <p className="text-sm">
                  {current.caption}{images.length > 1 ? ` · ${active + 1}/${images.length}` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="shrink-0 text-xs font-medium px-3 py-2 rounded-full border border-white/40 hover:bg-white/10"
              >
                Tutup
              </button>
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Foto sebelumnya"
                  className="absolute left-2 top-[40%] -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 text-white text-xl hover:bg-navy transition-colors rounded-full"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Foto berikutnya"
                  className="absolute right-2 top-[40%] -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 text-white text-xl hover:bg-navy transition-colors rounded-full"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}