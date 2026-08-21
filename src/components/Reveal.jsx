import { useEffect, useRef, useState } from 'react'

/**
 * Membungkus konten supaya muncul dengan animasi fade + slide
 * begitu discroll masuk ke layar. Pakai Intersection Observer bawaan
 * browser, jadi gak nambah dependency/library apapun.
 *
 * Contoh pakai:
 * <Reveal><h2>Judul</h2></Reveal>
 * <Reveal delay={150}><p>Teks nyusul dikit lebih lambat</p></Reveal>
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // animasi cuma sekali, gak berulang tiap scroll
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)'
      }}
    >
      {children}
    </div>
  )
}