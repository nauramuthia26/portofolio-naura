import { useState } from 'react'

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)
  if (!images || images.length === 0) return null
  const current = images[index]

  function prev() { setIndex((i) => (i - 1 + images.length) % images.length) }
  function next() { setIndex((i) => (i + 1) % images.length) }

  return (
    <div className="bg-surfaceAlt border-b md:border-b-0 md:border-r border-line p-4 md:p-6 flex flex-col items-center justify-center">
      <div className="relative w-full h-72 md:h-80 flex items-center justify-center">
        <img
          key={current.src}
          src={current.src}
          alt={current.caption || ''}
          className="max-w-full max-h-full object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        {images.length > 1 && (
          <>
            <button type="button" onClick={prev} aria-label="Gambar sebelumnya"
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/60 text-ink text-lg hover:bg-navy transition-colors rounded-full">
              ‹
            </button>
            <button type="button" onClick={next} aria-label="Gambar berikutnya"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/60 text-ink text-lg hover:bg-navy transition-colors rounded-full">
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button key={i} type="button" onClick={() => setIndex(i)} aria-label={`Lihat gambar ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-navy-light' : 'bg-ink/20'}`} />
          ))}
        </div>
      )}

      {current.caption && (
        <p className="text-xs text-muted mt-2">
          {current.caption}{images.length > 1 ? ` · ${index + 1}/${images.length}` : ''}
        </p>
      )}
    </div>
  )
}
