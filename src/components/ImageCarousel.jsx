import { useEffect, useState } from 'react'
import { ZoomIn } from 'lucide-react'

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const total = images ? images.length : 0

  function prev() { setIndex((i) => (i - 1 + total) % total) }
  function next() { setIndex((i) => (i + 1) % total) }

  // Tombol keyboard saat popup terbuka: Esc = tutup, panah = geser
  useEffect(() => {
    if (!open || total === 0) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, total])

  if (!images || total === 0) return null
  const current = images[index]

  return (
    <div className="bg-surfaceAlt border-b md:border-b-0 md:border-r border-line p-4 md:p-6 flex flex-col items-center justify-center">
      <div className="relative w-full h-72 md:h-80">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Perbesar gambar"
          className="w-full h-full flex items-center justify-center cursor-zoom-in"
        >
          <img
            key={current.src}
            src={current.src}
            alt={current.caption || ''}
            className="max-w-full max-h-full object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </button>

        <span className="pointer-events-none absolute top-1 right-1 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white">
          <ZoomIn className="w-4 h-4" />
        </span>

        {total > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Gambar sebelumnya"
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/60 text-white text-lg hover:bg-navy transition-colors rounded-full">
              ‹
            </button>
            <button type="button" onClick={next} aria-label="Gambar berikutnya"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/60 text-white text-lg hover:bg-navy transition-colors rounded-full">
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button key={i} type="button" onClick={() => setIndex(i)} aria-label={`Lihat gambar ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-navy-light' : 'bg-ink/20'}`} />
          ))}
        </div>
      )}

      {current.caption && (
        <p className="text-xs text-muted mt-2">
          {current.caption}{total > 1 ? ` · ${index + 1}/${total}` : ''}
        </p>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-10"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.caption || ''}
              className="w-full max-h-[78vh] object-contain rounded-xl bg-white"
            />

            <div className="flex items-start justify-between gap-4 mt-3 text-white">
              <p className="text-sm">
                {current.caption}{total > 1 ? ` · ${index + 1}/${total}` : ''}
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 text-xs font-medium px-3 py-2 rounded-full border border-white/40 hover:bg-white/10"
              >
                Tutup
              </button>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Gambar sebelumnya"
                  className="absolute left-2 top-[40%] -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 text-white text-xl hover:bg-navy transition-colors rounded-full"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Gambar berikutnya"
                  className="absolute right-2 top-[40%] -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 text-white text-xl hover:bg-navy transition-colors rounded-full"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}